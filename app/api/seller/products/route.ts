import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import { prisma } from '../../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !(session.user as any).id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is a seller
    const seller = await prisma.seller.findUnique({
      where: { userId: (session.user as any).id },
    });

    if (!seller) {
      return NextResponse.json({ message: 'Seller profile not found' }, { status: 404 });
    }

    const body = await request.json();
    const {
      name,
      description,
      price,
      stock,
      categoryId,
      images,
      weight,
      tags,
      customSku,
    } = body;

    // Validate required fields
    if (!name || !description || !price || stock === undefined || !categoryId || !images) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get or create category
    let category = await prisma.category.findUnique({
      where: { slug: categoryId },
    });

    if (!category) {
      category = await prisma.category.create({
        data: {
          name: categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace('-', ' '),
          slug: categoryId,
          description: `${categoryId} category`,
        },
      });
    }

    // Generate SKU
    const sku = `${categoryId.toUpperCase()}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

    // Create product
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        images,
        categoryId: category.id,
        stock: parseInt(stock),
        sku,
        weight: weight ? parseFloat(weight) : null,
        tags,
        isActive: true,
      },
    });

    // Create seller product relationship
    await prisma.sellerProduct.create({
      data: {
        sellerId: seller.id,
        productId: product.id,
        customSku: customSku || null,
        price: parseFloat(price),
        stock: parseInt(stock),
        isActive: true,
      },
    });

    return NextResponse.json(
      { message: 'Product created successfully', product },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !(session.user as any).id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const seller = await prisma.seller.findUnique({
      where: { userId: (session.user as any).id },
    });

    if (!seller) {
      return NextResponse.json({ message: 'Seller profile not found' }, { status: 404 });
    }

    const products = await prisma.sellerProduct.findMany({
      where: { sellerId: seller.id },
      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
