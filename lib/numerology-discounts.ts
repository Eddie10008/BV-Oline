import { NumerologyProfile } from './numerology';

export interface NumerologyDiscount {
  percentage: number;
  reason: string;
  validUntil: Date;
  code: string;
  description: string;
}

export interface DiscountCalculation {
  baseDiscount: number;
  luckyNumberBonus: number;
  seasonalBonus: number;
  totalDiscount: number;
  discountDetails: NumerologyDiscount;
}

// Lucky number multipliers for each Life Path Number
const luckyNumberMultipliers: Record<number, number> = {
  1: 1.2, // Pioneer - ambitious, gets higher discounts
  2: 1.1, // Mediator - balanced approach
  3: 1.3, // Communicator - creative, gets creative discounts
  4: 1.0, // Builder - practical, standard discounts
  5: 1.4, // Adventurer - loves deals, gets adventurous discounts
  6: 1.2, // Nurturer - caring, gets nurturing discounts
  7: 1.1, // Seeker - analytical, moderate discounts
  8: 1.5, // Achiever - ambitious, gets premium discounts
  9: 1.3, // Humanitarian - generous, gets generous discounts
  11: 1.6, // Intuitive - spiritual, gets mystical discounts
  22: 1.7, // Master Builder - visionary, gets master discounts
  33: 1.8, // Master Teacher - highest vibration, gets ultimate discounts
};

// Seasonal bonuses based on birth month
const seasonalBonuses: Record<number, { bonus: number; reason: string }> = {
  1: { bonus: 0.05, reason: "New Year Energy" }, // January
  2: { bonus: 0.03, reason: "Love Month" }, // February
  3: { bonus: 0.04, reason: "Spring Awakening" }, // March
  4: { bonus: 0.02, reason: "Fresh Start" }, // April
  5: { bonus: 0.06, reason: "Flower Power" }, // May
  6: { bonus: 0.04, reason: "Summer Solstice" }, // June
  7: { bonus: 0.05, reason: "Mid-Year Magic" }, // July
  8: { bonus: 0.03, reason: "Harvest Time" }, // August
  9: { bonus: 0.04, reason: "Autumn Balance" }, // September
  10: { bonus: 0.05, reason: "Golden October" }, // October
  11: { bonus: 0.06, reason: "Gratitude Month" }, // November
  12: { bonus: 0.07, reason: "Holiday Spirit" }, // December
};

// Special day bonuses
const specialDayBonuses: Record<number, { bonus: number; reason: string }> = {
  1: { bonus: 0.03, reason: "New Beginning" },
  7: { bonus: 0.05, reason: "Lucky Seven" },
  11: { bonus: 0.07, reason: "Master Number Day" },
  22: { bonus: 0.08, reason: "Master Builder Day" },
  33: { bonus: 0.10, reason: "Master Teacher Day" },
  8: { bonus: 0.04, reason: "Abundance Day" },
  9: { bonus: 0.03, reason: "Completion Day" },
  15: { bonus: 0.02, reason: "Half Moon Energy" },
  21: { bonus: 0.03, reason: "Creative Flow" },
  28: { bonus: 0.02, reason: "Lunar Cycle" },
};

export function calculateNumerologyDiscount(
  dateOfBirth: Date,
  numerologyProfile: NumerologyProfile,
  baseAmount: number = 100
): DiscountCalculation {
  const today = new Date();
  const birthMonth = dateOfBirth.getMonth() + 1;
  const birthDay = dateOfBirth.getDate();
  const birthYear = dateOfBirth.getFullYear();
  
  // Base discount based on Life Path Number
  const baseDiscount = Math.min(0.25, 0.05 + (numerologyProfile.lifePathNumber * 0.01));
  
  // Lucky number bonus
  const luckyNumberBonus = calculateLuckyNumberBonus(numerologyProfile, baseAmount);
  
  // Seasonal bonus based on birth month
  const seasonalBonus = seasonalBonuses[birthMonth]?.bonus || 0;
  
  // Special day bonus
  const specialDayBonus = specialDayBonuses[birthDay]?.bonus || 0;
  
  // Age-based bonus (older customers get slightly higher discounts)
  const age = today.getFullYear() - birthYear;
  const ageBonus = Math.min(0.05, age * 0.001);
  
  // Calculate total discount
  const totalDiscount = Math.min(0.50, baseDiscount + luckyNumberBonus + seasonalBonus + specialDayBonus + ageBonus);
  
  // Generate discount code
  const discountCode = generateDiscountCode(numerologyProfile, dateOfBirth);
  
  // Set validity (30 days from today)
  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 30);
  
  // Create discount reason
  const reasons = [];
  if (baseDiscount > 0.05) reasons.push(`Life Path ${numerologyProfile.lifePathNumber} bonus`);
  if (luckyNumberBonus > 0) reasons.push("Lucky number alignment");
  if (seasonalBonus > 0) reasons.push(seasonalBonuses[birthMonth]?.reason);
  if (specialDayBonus > 0) reasons.push(specialDayBonuses[birthDay]?.reason);
  if (ageBonus > 0) reasons.push("Loyalty bonus");
  
  const reason = reasons.join(", ");
  
  return {
    baseDiscount,
    luckyNumberBonus,
    seasonalBonus,
    totalDiscount,
    discountDetails: {
      percentage: Math.round(totalDiscount * 100),
      reason,
      validUntil,
      code: discountCode,
      description: generateDiscountDescription(numerologyProfile, totalDiscount, reason)
    }
  };
}

function calculateLuckyNumberBonus(profile: NumerologyProfile, baseAmount: number): number {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  
  // Check if today's date contains any lucky numbers
  const dateString = `${dayOfMonth}${month}${year}`;
  let bonus = 0;
  
  profile.luckyNumbers.forEach(luckyNumber => {
    if (dateString.includes(luckyNumber.toString())) {
      bonus += 0.02; // 2% bonus for each lucky number match
    }
  });
  
  // Additional bonus for master numbers
  if (profile.lifePathNumber === 11 || profile.lifePathNumber === 22 || profile.lifePathNumber === 33) {
    bonus += 0.03; // 3% extra for master numbers
  }
  
  return Math.min(0.10, bonus); // Cap at 10%
}

function generateDiscountCode(profile: NumerologyProfile, dateOfBirth: Date): string {
  const prefix = getLifePathPrefix(profile.lifePathNumber);
  const birthDay = dateOfBirth.getDate().toString().padStart(2, '0');
  const birthMonth = (dateOfBirth.getMonth() + 1).toString().padStart(2, '0');
  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  
  return `${prefix}${birthDay}${birthMonth}${randomSuffix}`;
}

function getLifePathPrefix(lifePathNumber: number): string {
  const prefixes: Record<number, string> = {
    1: 'PIONEER',
    2: 'MEDIATOR',
    3: 'CREATIVE',
    4: 'BUILDER',
    5: 'ADVENTURE',
    6: 'NURTURE',
    7: 'SEEKER',
    8: 'ACHIEVER',
    9: 'HUMANITARIAN',
    11: 'INTUITIVE',
    22: 'MASTER',
    33: 'TEACHER'
  };
  
  return prefixes[lifePathNumber] || 'SPECIAL';
}

function generateDiscountDescription(
  profile: NumerologyProfile, 
  totalDiscount: number, 
  reason: string
): string {
  const percentage = Math.round(totalDiscount * 100);
  
  const descriptions: Record<number, string> = {
    1: `As a Pioneer (Life Path 1), you're a natural leader! Enjoy ${percentage}% off as you blaze new trails in fashion.`,
    2: `Your diplomatic nature (Life Path 2) brings harmony to your shopping experience with ${percentage}% off.`,
    3: `Express your creativity (Life Path 3) with ${percentage}% off on our vibrant collection!`,
    4: `Your practical approach (Life Path 4) is rewarded with ${percentage}% off on quality essentials.`,
    5: `Adventure awaits! Your free spirit (Life Path 5) gets ${percentage}% off on exciting new styles.`,
    6: `Nurture yourself (Life Path 6) with ${percentage}% off on beautiful, caring designs.`,
    7: `Your analytical mind (Life Path 7) has found the perfect deal: ${percentage}% off!`,
    8: `Achieve your goals (Life Path 8) with ${percentage}% off on premium selections.`,
    9: `Your humanitarian spirit (Life Path 9) is honored with ${percentage}% off on universal styles.`,
    11: `Your intuitive wisdom (Life Path 11) reveals ${percentage}% off on spiritual fashion choices.`,
    22: `Master your style (Life Path 22) with ${percentage}% off on visionary designs.`,
    33: `Teach through beauty (Life Path 33) with ${percentage}% off on healing fashion.`
  };
  
  return descriptions[profile.lifePathNumber] || `Your unique energy (Life Path ${profile.lifePathNumber}) brings you ${percentage}% off!`;
}

// Special occasion discounts
export function getSpecialOccasionDiscount(dateOfBirth: Date, profile: NumerologyProfile): NumerologyDiscount | null {
  const today = new Date();
  const birthMonth = dateOfBirth.getMonth() + 1;
  const birthDay = dateOfBirth.getDate();
  
  // Birthday discount
  if (today.getMonth() + 1 === birthMonth && today.getDate() === birthDay) {
    return {
      percentage: 25,
      reason: "Birthday Special",
      validUntil: new Date(today.getTime() + 24 * 60 * 60 * 1000), // 24 hours
      code: `BDAY${profile.lifePathNumber}${birthDay}${birthMonth}`,
      description: `Happy Birthday! Your special day brings you 25% off on everything!`
    };
  }
  
  // Birth month discount
  if (today.getMonth() + 1 === birthMonth) {
    return {
      percentage: 15,
      reason: "Birth Month Celebration",
      validUntil: new Date(today.getFullYear(), birthMonth, 0), // End of birth month
      code: `MONTH${profile.lifePathNumber}${birthMonth}`,
      description: `Celebrate your birth month with 15% off!`
    };
  }
  
  // Lucky number day discount
  const dayOfMonth = today.getDate();
  if (profile.luckyNumbers.includes(dayOfMonth)) {
    return {
      percentage: 12,
      reason: "Lucky Number Day",
      validUntil: new Date(today.getTime() + 24 * 60 * 60 * 1000), // 24 hours
      code: `LUCKY${profile.lifePathNumber}${dayOfMonth}`,
      description: `Today is your lucky number day! Enjoy 12% off!`
    };
  }
  
  return null;
}

// Compatibility discount for couples
export function getCompatibilityDiscount(
  userProfile: NumerologyProfile,
  partnerProfile: NumerologyProfile
): NumerologyDiscount | null {
  if (userProfile.compatibility.includes(partnerProfile.lifePathNumber)) {
    return {
      percentage: 18,
      reason: "Numerology Compatibility",
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      code: `COMPAT${userProfile.lifePathNumber}${partnerProfile.lifePathNumber}`,
      description: `Your numerology compatibility brings you both 18% off!`
    };
  }
  
  return null;
}
