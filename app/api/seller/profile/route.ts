import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import { prisma } from '../../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if seller profile already exists
    const existingSeller = await prisma.seller.findUnique({
      where: { userId: session.user.id },
    });

    if (existingSeller) {
      return NextResponse.json(
        { message: 'Seller profile already exists' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const {
      businessName,
      description,
      logo,
      address,
      phone,
      website,
      gstNumber,
      panNumber,
      bankDetails,
    } = body;

    // Validate required fields
    if (!businessName || !address) {
      return NextResponse.json(
        { message: 'Business name and address are required' },
        { status: 400 }
      );
    }

    // Create seller profile
    const seller = await prisma.seller.create({
      data: {
        userId: session.user.id,
        businessName,
        description: description || null,
        logo: logo || null,
        address,
        phone: phone || null,
        website: website || null,
        gstNumber: gstNumber || null,
        panNumber: panNumber || null,
        bankDetails: bankDetails || null,
        isVerified: false,
        isActive: true,
        commission: 10.0, // Default commission
      },
    });

    // Update user role to SELLER
    await prisma.user.update({
      where: { id: session.user.id },
      data: { role: 'SELLER' },
    });

    return NextResponse.json(
      { message: 'Seller profile created successfully', seller },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating seller profile:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if seller profile exists
    const existingSeller = await prisma.seller.findUnique({
      where: { userId: session.user.id },
    });

    if (!existingSeller) {
      return NextResponse.json(
        { message: 'Seller profile not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const {
      businessName,
      description,
      logo,
      address,
      phone,
      website,
      gstNumber,
      panNumber,
      bankDetails,
    } = body;

    // Validate required fields
    if (!businessName || !address) {
      return NextResponse.json(
        { message: 'Business name and address are required' },
        { status: 400 }
      );
    }

    // Update seller profile
    const updatedSeller = await prisma.seller.update({
      where: { userId: session.user.id },
      data: {
        businessName,
        description: description || null,
        logo: logo || null,
        address,
        phone: phone || null,
        website: website || null,
        gstNumber: gstNumber || null,
        panNumber: panNumber || null,
        bankDetails: bankDetails || null,
      },
    });

    return NextResponse.json(
      { message: 'Seller profile updated successfully', seller: updatedSeller },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating seller profile:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const seller = await prisma.seller.findUnique({
      where: { userId: session.user.id },
    });

    if (!seller) {
      return NextResponse.json(
        { message: 'Seller profile not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(seller);
  } catch (error) {
    console.error('Error fetching seller profile:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
