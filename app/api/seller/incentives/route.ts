import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import { prisma } from '../../../../lib/prisma';

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
      return NextResponse.json({ message: 'Seller profile not found' }, { status: 404 });
    }

    // Calculate seller performance metrics
    const totalSales = await prisma.order.aggregate({
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

    const averageRating = await prisma.review.aggregate({
      where: {
        product: {
          sellerProduct: {
            sellerId: seller.id,
          },
        },
      },
      _avg: {
        rating: true,
      },
    });

    const totalProducts = await prisma.sellerProduct.count({
      where: { sellerId: seller.id },
    });

    // Calculate points based on performance
    let points = 0;
    let tier = 'Bronze';
    let commissionRate = 10.0;

    // Points calculation logic
    if (totalSales._sum.total) {
      points += Math.floor(totalSales._sum.total / 1000) * 10; // 10 points per ₹1000
    }
    points += totalOrders * 5; // 5 points per order
    points += totalProducts * 2; // 2 points per product
    if (averageRating._avg.rating) {
      points += Math.floor(averageRating._avg.rating * 50); // 50 points per rating point
    }

    // Determine tier based on points
    if (points >= 2000) {
      tier = 'Platinum';
      commissionRate = 8.0;
    } else if (points >= 1000) {
      tier = 'Gold';
      commissionRate = 8.5;
    } else if (points >= 500) {
      tier = 'Silver';
      commissionRate = 9.0;
    }

    // Calculate rewards
    const cashRewards = Math.floor(points / 100) * 100; // ₹100 per 100 points
    const availableRewards = Math.floor(cashRewards * 0.2); // 20% available for withdrawal

    // Get recent achievements
    const achievements = [
      {
        id: 'first-sale',
        name: 'First Sale',
        description: 'Completed first order',
        icon: '🏆',
        unlocked: totalOrders > 0,
        points: 100,
        unlockedAt: totalOrders > 0 ? new Date() : null,
      },
      {
        id: 'quality-master',
        name: 'Quality Master',
        description: 'Maintained 4.5+ rating',
        icon: '⭐',
        unlocked: (averageRating._avg.rating || 0) >= 4.5,
        points: 250,
        unlockedAt: (averageRating._avg.rating || 0) >= 4.5 ? new Date() : null,
      },
      {
        id: 'fast-shipper',
        name: 'Fast Shipper',
        description: '100% on-time delivery',
        icon: '🚀',
        unlocked: true, // Mock data
        points: 200,
        unlockedAt: new Date(),
      },
      {
        id: 'sales-champion',
        name: 'Sales Champion',
        description: '₹50,000 in sales',
        icon: '💰',
        unlocked: (totalSales._sum.total || 0) >= 50000,
        points: 500,
        unlockedAt: (totalSales._sum.total || 0) >= 50000 ? new Date() : null,
      },
    ];

    // Get active challenges
    const challenges = [
      {
        id: 'festive-sales',
        name: 'Festive Sales Challenge',
        description: 'Boost your sales during the festive season',
        target: 25000,
        current: Math.min(18500, totalSales._sum.total || 0),
        reward: { points: 500, cash: 1000 },
        endDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 days from now
        active: true,
      },
      {
        id: 'quality-excellence',
        name: 'Quality Excellence',
        description: 'Maintain high customer satisfaction',
        target: 4.8,
        current: averageRating._avg.rating || 0,
        reward: { points: 300, badge: 'Quality Master' },
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        active: true,
      },
    ];

    return NextResponse.json({
      seller: {
        id: seller.id,
        businessName: seller.businessName,
        tier,
        points,
        commissionRate,
        totalSales: totalSales._sum.total || 0,
        totalOrders,
        averageRating: averageRating._avg.rating || 0,
        totalProducts,
      },
      rewards: {
        totalEarned: cashRewards,
        available: availableRewards,
        thisMonth: Math.floor(cashRewards * 0.1), // Mock monthly earnings
      },
      achievements,
      challenges,
      benefits: {
        prioritySupport: tier !== 'Bronze',
        advancedAnalytics: tier !== 'Bronze',
        featuredListings: tier === 'Silver' || tier === 'Gold' || tier === 'Platinum',
        earlyAccess: tier === 'Gold' || tier === 'Platinum',
        dedicatedManager: tier === 'Platinum',
      },
    });
  } catch (error) {
    console.error('Error fetching seller incentives:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { action, challengeId } = body;

    if (action === 'claim-reward') {
      // Handle reward claiming logic
      return NextResponse.json({ message: 'Reward claimed successfully' });
    }

    if (action === 'join-challenge' && challengeId) {
      // Handle challenge joining logic
      return NextResponse.json({ message: 'Joined challenge successfully' });
    }

    return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error processing incentive action:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
