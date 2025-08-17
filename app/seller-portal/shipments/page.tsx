import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import React from 'react';
import { prisma } from '../../../lib/prisma';
import { redirect } from 'next/navigation';
import ShipmentList from '../../../components/seller-portal/ShipmentList';

export default async function ShipmentsPage() {
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

  const shipments = await prisma.shipment.findMany({
    where: { sellerId: seller.id },
    include: {
      order: {
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
          items: {
            include: {
              product: true,
            },
          },
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
        <h1 className="text-3xl font-bold text-gray-900">Shipments</h1>
      </div>

      <ShipmentList shipments={shipments} />
    </div>
  );
}
