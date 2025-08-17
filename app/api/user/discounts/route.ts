import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import { prisma } from '../../../../lib/prisma';
import { 
  calculateNumerologyDiscount, 
  getSpecialOccasionDiscount,
  NumerologyDiscount 
} from '../../../../lib/numerology-discounts';
import { NumerologyProfile } from '../../../../lib/numerology';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        dateOfBirth: true,
        numerologyProfile: true,
        lifePathNumber: true
      }
    });

    if (!user || !user.dateOfBirth || !user.numerologyProfile) {
      return NextResponse.json(
        { message: 'Numerology profile not found' },
        { status: 404 }
      );
    }

    // Parse numerology profile
    let numerologyProfile: NumerologyProfile;
    try {
      numerologyProfile = JSON.parse(user.numerologyProfile);
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid numerology profile' },
        { status: 400 }
      );
    }

    // Calculate regular numerology discount
    const discountCalculation = calculateNumerologyDiscount(
      user.dateOfBirth,
      numerologyProfile
    );

    // Check for special occasion discounts
    const specialDiscount = getSpecialOccasionDiscount(user.dateOfBirth, numerologyProfile);

    // Combine all available discounts
    const availableDiscounts: NumerologyDiscount[] = [
      discountCalculation.discountDetails
    ];

    if (specialDiscount) {
      availableDiscounts.push(specialDiscount);
    }

    return NextResponse.json({
      discounts: availableDiscounts,
      calculation: discountCalculation,
      userProfile: {
        lifePathNumber: user.lifePathNumber,
        dateOfBirth: user.dateOfBirth
      }
    });
  } catch (error) {
    console.error('Error generating discounts:', error);
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
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { discountCode } = body;

    if (!discountCode) {
      return NextResponse.json(
        { message: 'Discount code is required' },
        { status: 400 }
      );
    }

    // Validate discount code format
    const codePattern = /^(PIONEER|MEDIATOR|CREATIVE|BUILDER|ADVENTURE|NURTURE|SEEKER|ACHIEVER|HUMANITARIAN|INTUITIVE|MASTER|TEACHER|BDAY|MONTH|LUCKY|COMPAT)\d{2}\d{2}[A-Z0-9]{4}$/;
    
    if (!codePattern.test(discountCode)) {
      return NextResponse.json(
        { message: 'Invalid discount code format' },
        { status: 400 }
      );
    }

    // Here you would typically validate the discount code against your database
    // For now, we'll return a success response
    return NextResponse.json({
      message: 'Discount code validated successfully',
      discountCode,
      isValid: true
    });
  } catch (error) {
    console.error('Error validating discount code:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
