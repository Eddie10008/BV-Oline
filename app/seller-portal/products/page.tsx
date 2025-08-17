import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import React from 'react';
import { prisma } from '../../../lib/prisma';
import { redirect } from 'next/navigation';
import ProductList from '../../../components/seller-portal/ProductList';
import AddProductButton from '../../../components/seller-portal/AddProductButton';

export default async function ProductsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  const seller = await prisma.seller.findUnique({
    where: { userId: session.user.id },
  });

  if (!seller) {
    redirect('/seller-portal/settings');
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <AddProductButton />
      </div>

      <ProductList products={products} />
    </div>
  );
}
