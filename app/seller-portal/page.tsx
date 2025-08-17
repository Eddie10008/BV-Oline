import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import React from 'react';
import { prisma } from '../../lib/prisma';
import DashboardStats from '../../components/seller-portal/DashboardStats';
import RecentOrders from '../../components/seller-portal/RecentOrders';
import TopProducts from '../../components/seller-portal/TopProducts';
import SalesChart from '../../components/seller-portal/SalesChart';

export default async function SellerDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return null;
  }

  // Get seller data
  const seller = await prisma.seller.findUnique({
    where: { userId: session.user.id },
    include: {
      products: {
        include: {
          product: true,
        },
      },
      shipments: {
        include: {
          order: true,
        },
      },
    },
  });

  if (!seller) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Welcome to Seller Portal
        </h2>
        <p className="text-gray-600 mb-6">
          Complete your seller profile to start selling on our platform.
        </p>
        <a
          href="/seller-portal/settings"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Complete Profile
        </a>
      </div>
    );
  }

  // Calculate statistics
  const totalProducts = seller.products.length;
  const activeProducts = seller.products.filter(p => p.isActive).length;
  const totalOrders = seller.shipments.length;
  const pendingShipments = seller.shipments.filter(s => s.status === 'PENDING').length;

  // Get recent orders
  const recentOrders = await prisma.order.findMany({
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
    take: 5,
  });

  // Get top products
  const topProducts = await prisma.orderItem.groupBy({
    by: ['productId'],
    where: {
      product: {
        sellerProduct: {
          sellerId: seller.id,
        },
      },
    },
    _sum: {
      quantity: true,
    },
    orderBy: {
      _sum: {
        quantity: 'desc',
      },
    },
    take: 5,
  });

  const topProductsWithDetails = await Promise.all(
    topProducts.map(async (item) => {
      const product = await prisma.product.findUnique({
        where: { id: item.productId },
      });
      return {
        ...item,
        product,
      };
    })
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {seller.businessName}!
        </h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <DashboardStats
        totalProducts={totalProducts}
        activeProducts={activeProducts}
        totalOrders={totalOrders}
        pendingShipments={pendingShipments}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart sellerId={seller.id} />
        <TopProducts products={topProductsWithDetails} />
      </div>

      <RecentOrders orders={recentOrders} />
    </div>
  );
}
