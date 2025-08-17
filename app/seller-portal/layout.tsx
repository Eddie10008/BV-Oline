import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import React from 'react';
import SellerSidebar from '../../components/seller-portal/SellerSidebar';
import SellerHeader from '../../components/seller-portal/SellerHeader';

export default async function SellerPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  if (session.user.role !== 'SELLER' && session.user.role !== 'ADMIN') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerHeader />
      <div className="flex">
        <SellerSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
