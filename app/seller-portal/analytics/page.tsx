import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import React from 'react';
import { prisma } from '../../../lib/prisma';
import { redirect } from 'next/navigation';
import AnalyticsOverview from '../../../components/seller-portal/AnalyticsOverview';

export default async function AnalyticsPage() {
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

  // Get analytics data
  const totalProducts = await prisma.sellerProduct.count({
    where: { sellerId: seller.id },
  });

  const activeProducts = await prisma.sellerProduct.count({
    where: { 
      sellerId: seller.id,
      isActive: true,
    },
  });

  const totalOrders = await prisma.order.count({
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
  });

  const totalRevenue = await prisma.order.aggregate({
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
      status: {
        notIn: ['CANCELLED', 'REFUNDED'],
      },
    },
    _sum: {
      total: true,
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
      </div>

      <AnalyticsOverview
        totalProducts={totalProducts}
        activeProducts={activeProducts}
        totalOrders={totalOrders}
        totalRevenue={totalRevenue._sum.total || 0}
      />
    </div>
  );
}
