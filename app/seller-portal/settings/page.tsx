import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import React from 'react';
import { prisma } from '../../../lib/prisma';
import { redirect } from 'next/navigation';
import SellerProfileForm from '../../../components/seller-portal/SellerProfileForm';

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  const seller = await prisma.seller.findUnique({
    where: { userId: session.user.id },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </div>

      <SellerProfileForm seller={seller} />
    </div>
  );
}
