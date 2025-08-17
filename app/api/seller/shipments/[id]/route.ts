import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../lib/auth';
import { prisma } from '../../../../../lib/prisma';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is a seller
    const seller = await prisma.seller.findUnique({
      where: { userId: session.user.id },
    });

    if (!seller) {
      return NextResponse.json({ message: 'Seller profile not found' }, { status: 404 });
    }

    // Check if shipment belongs to this seller
    const shipment = await prisma.shipment.findFirst({
      where: {
        id: params.id,
        sellerId: seller.id,
      },
    });

    if (!shipment) {
      return NextResponse.json({ message: 'Shipment not found' }, { status: 404 });
    }

    const body = await request.json();
    const { trackingNumber, carrier, status, notes } = body;

    // Update shipment
    const updatedShipment = await prisma.shipment.update({
      where: { id: params.id },
      data: {
        trackingNumber: trackingNumber || null,
        carrier: carrier || null,
        status,
        notes: notes || null,
        shippedAt: status === 'SHIPPED' ? new Date() : shipment.shippedAt,
        deliveredAt: status === 'DELIVERED' ? new Date() : shipment.deliveredAt,
      },
    });

    return NextResponse.json(
      { message: 'Shipment updated successfully', shipment: updatedShipment },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating shipment:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
