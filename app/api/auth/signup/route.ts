import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import bcrypt from 'bcryptjs';
import { calculateLifePathNumber, generateNumerologyProfile } from '../../../../lib/numerology';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      password,
      dateOfBirth,
      lifePathNumber,
      numerologyProfile,
      themePreference
    } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Calculate numerology if date of birth is provided
    let calculatedLifePathNumber = lifePathNumber;
    let calculatedNumerologyProfile = numerologyProfile;
    let calculatedThemePreference = themePreference;

    if (dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      calculatedLifePathNumber = calculateLifePathNumber(birthDate);
      const profile = generateNumerologyProfile(calculatedLifePathNumber);
      calculatedNumerologyProfile = JSON.stringify(profile);
      calculatedThemePreference = JSON.stringify(profile.themeColors);
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        lifePathNumber: calculatedLifePathNumber,
        numerologyProfile: calculatedNumerologyProfile,
        themePreference: calculatedThemePreference,
        role: 'USER'
      }
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: userWithoutPassword
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
