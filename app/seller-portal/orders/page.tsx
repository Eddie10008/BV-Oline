import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import React from 'react';
import { prisma } from '../../../lib/prisma';
import { redirect } from 'next/navigation';
import OrderList from '../../../components/seller-portal/OrderList';

export default async function OrdersPage() {
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

  const orders = await prisma.order.findMany({
    where: {
      items: {
        some: {
          product: {
            sellerProduct: {
              sellerId: seller.id,
            },
          },
        },
      },
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
      user: {
        select: {
          name: true,
          email: true,
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
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
      </div>

      <OrderList orders={orders} />
    </div>
  );
}
