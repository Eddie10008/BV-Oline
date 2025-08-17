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

// Exponential discount multipliers for each Life Path Number
const discountMultipliers: Record<number, number> = {
  1: 1.2, // Pioneer - ambitious, gets higher discounts
  2: 1.1, // Mediator - balanced approach
  3: 1.3, // Communicator - creative, gets creative discounts
  4: 1.0, // Builder - practical, standard discounts
  5: 1.4, // Adventurer - loves deals, gets adventurous discounts
  6: 1.2, // Nurturer - caring, gets nurturing discounts
  7: 1.1, // Seeker - analytical, moderate discounts
  8: 1.5, // Achiever - ambitious, gets premium discounts
  9: 1.3, // Humanitarian - generous, gets generous discounts
  11: 2.5, // Intuitive - spiritual, gets exponential mystical discounts
  22: 3.0, // Master Builder - visionary, gets exponential master discounts
  33: 4.0, // Master Teacher - highest vibration, gets ultimate exponential discounts
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
  
  // Base discount based on Life Path Number with exponential scaling for master numbers
  let baseDiscount: number;
  
  if (numerologyProfile.lifePathNumber === 11 || numerologyProfile.lifePathNumber === 22 || numerologyProfile.lifePathNumber === 33) {
    // Exponential discount for master numbers
    const masterNumber = numerologyProfile.lifePathNumber;
    const exponentialMultiplier = discountMultipliers[masterNumber];
    baseDiscount = Math.min(0.40, 0.10 + (masterNumber * 0.02) * exponentialMultiplier);
  } else {
    // Standard discount for regular numbers
    baseDiscount = Math.min(0.25, 0.05 + (numerologyProfile.lifePathNumber * 0.01));
  }
  
  // Lucky number bonus with enhanced rates for master numbers
  const luckyNumberBonus = calculateLuckyNumberBonus(numerologyProfile, baseAmount);
  
  // Seasonal bonus based on birth month
  const seasonalBonus = seasonalBonuses[birthMonth]?.bonus || 0;
  
  // Special day bonus
  const specialDayBonus = specialDayBonuses[birthDay]?.bonus || 0;
  
  // Age-based bonus (older customers get slightly higher discounts)
  const age = today.getFullYear() - birthYear;
  const ageBonus = Math.min(0.05, age * 0.001);
  
  // Calculate total discount with higher caps for master numbers
  const maxDiscount = numerologyProfile.lifePathNumber === 33 ? 0.75 : 
                     numerologyProfile.lifePathNumber === 22 ? 0.70 :
                     numerologyProfile.lifePathNumber === 11 ? 0.65 : 0.50;
  
  const totalDiscount = Math.min(maxDiscount, baseDiscount + luckyNumberBonus + seasonalBonus + specialDayBonus + ageBonus);
  
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
      // Enhanced bonus for master numbers
      if (profile.lifePathNumber === 11 || profile.lifePathNumber === 22 || profile.lifePathNumber === 33) {
        bonus += 0.05; // 5% bonus for master numbers
      } else {
        bonus += 0.02; // 2% bonus for regular numbers
      }
    }
  });
  
  // Exponential bonus for master numbers
  if (profile.lifePathNumber === 11) {
    bonus += 0.08; // 8% extra for Life Path 11
  } else if (profile.lifePathNumber === 22) {
    bonus += 0.12; // 12% extra for Life Path 22
  } else if (profile.lifePathNumber === 33) {
    bonus += 0.15; // 15% extra for Life Path 33
  }
  
  // Higher cap for master numbers
  const maxBonus = profile.lifePathNumber === 33 ? 0.25 : 
                  profile.lifePathNumber === 22 ? 0.20 :
                  profile.lifePathNumber === 11 ? 0.18 : 0.10;
  
  return Math.min(maxBonus, bonus);
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
    11: `🌟 Your MASTER INTUITIVE energy (Life Path 11) unlocks exponential savings of ${percentage}% off! Your spiritual wisdom deserves extraordinary rewards.`,
    22: `🌟 Your MASTER BUILDER energy (Life Path 22) manifests incredible savings of ${percentage}% off! Your visionary power creates extraordinary value.`,
    33: `🌟 Your MASTER TEACHER energy (Life Path 33) receives the ULTIMATE blessing of ${percentage}% off! Your highest spiritual vibration deserves the greatest rewards.`
  };
  
  return descriptions[profile.lifePathNumber] || `Your unique energy (Life Path ${profile.lifePathNumber}) brings you ${percentage}% off!`;
}

// Special occasion discounts with exponential rates for master numbers
export function getSpecialOccasionDiscount(dateOfBirth: Date, profile: NumerologyProfile): NumerologyDiscount | null {
  const today = new Date();
  const birthMonth = dateOfBirth.getMonth() + 1;
  const birthDay = dateOfBirth.getDate();
  
  // Enhanced birthday discount for master numbers
  if (today.getMonth() + 1 === birthMonth && today.getDate() === birthDay) {
    let birthdayPercentage = 25;
    let birthdayReason = "Birthday Special";
    
    if (profile.lifePathNumber === 11) {
      birthdayPercentage = 40;
      birthdayReason = "Master Intuitive Birthday";
    } else if (profile.lifePathNumber === 22) {
      birthdayPercentage = 50;
      birthdayReason = "Master Builder Birthday";
    } else if (profile.lifePathNumber === 33) {
      birthdayPercentage = 60;
      birthdayReason = "Master Teacher Birthday";
    }
    
    return {
      percentage: birthdayPercentage,
      reason: birthdayReason,
      validUntil: new Date(today.getTime() + 24 * 60 * 60 * 1000), // 24 hours
      code: `BDAY${profile.lifePathNumber}${birthDay}${birthMonth}`,
      description: `Happy Birthday! Your master number energy brings you ${birthdayPercentage}% off on everything!`
    };
  }
  
  // Enhanced birth month discount for master numbers
  if (today.getMonth() + 1 === birthMonth) {
    let monthPercentage = 15;
    let monthReason = "Birth Month Celebration";
    
    if (profile.lifePathNumber === 11) {
      monthPercentage = 25;
      monthReason = "Master Intuitive Birth Month";
    } else if (profile.lifePathNumber === 22) {
      monthPercentage = 30;
      monthReason = "Master Builder Birth Month";
    } else if (profile.lifePathNumber === 33) {
      monthPercentage = 35;
      monthReason = "Master Teacher Birth Month";
    }
    
    return {
      percentage: monthPercentage,
      reason: monthReason,
      validUntil: new Date(today.getFullYear(), birthMonth, 0), // End of birth month
      code: `MONTH${profile.lifePathNumber}${birthMonth}`,
      description: `Celebrate your master number birth month with ${monthPercentage}% off!`
    };
  }
  
  // Enhanced lucky number day discount for master numbers
  const dayOfMonth = today.getDate();
  if (profile.luckyNumbers.includes(dayOfMonth)) {
    let luckyPercentage = 12;
    let luckyReason = "Lucky Number Day";
    
    if (profile.lifePathNumber === 11) {
      luckyPercentage = 20;
      luckyReason = "Master Intuitive Lucky Day";
    } else if (profile.lifePathNumber === 22) {
      luckyPercentage = 25;
      luckyReason = "Master Builder Lucky Day";
    } else if (profile.lifePathNumber === 33) {
      luckyPercentage = 30;
      luckyReason = "Master Teacher Lucky Day";
    }
    
    return {
      percentage: luckyPercentage,
      reason: luckyReason,
      validUntil: new Date(today.getTime() + 24 * 60 * 60 * 1000), // 24 hours
      code: `LUCKY${profile.lifePathNumber}${dayOfMonth}`,
      description: `Today is your master number lucky day! Enjoy ${luckyPercentage}% off!`
    };
  }
  
  return null;
}

// Enhanced compatibility discount for couples with master number bonuses
export function getCompatibilityDiscount(
  userProfile: NumerologyProfile,
  partnerProfile: NumerologyProfile
): NumerologyDiscount | null {
  if (userProfile.compatibility.includes(partnerProfile.lifePathNumber)) {
    let compatibilityPercentage = 18;
    let compatibilityReason = "Numerology Compatibility";
    
    // Enhanced compatibility for master numbers
    if (userProfile.lifePathNumber === 11 || partnerProfile.lifePathNumber === 11) {
      compatibilityPercentage = 25;
      compatibilityReason = "Master Intuitive Compatibility";
    }
    if (userProfile.lifePathNumber === 22 || partnerProfile.lifePathNumber === 22) {
      compatibilityPercentage = 30;
      compatibilityReason = "Master Builder Compatibility";
    }
    if (userProfile.lifePathNumber === 33 || partnerProfile.lifePathNumber === 33) {
      compatibilityPercentage = 35;
      compatibilityReason = "Master Teacher Compatibility";
    }
    
    // Special bonus for double master number compatibility
    if ((userProfile.lifePathNumber === 11 && partnerProfile.lifePathNumber === 11) ||
        (userProfile.lifePathNumber === 22 && partnerProfile.lifePathNumber === 22) ||
        (userProfile.lifePathNumber === 33 && partnerProfile.lifePathNumber === 33)) {
      compatibilityPercentage = 45;
      compatibilityReason = "Master Number Twin Flame Compatibility";
    }
    
    return {
      percentage: compatibilityPercentage,
      reason: compatibilityReason,
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      code: `COMPAT${userProfile.lifePathNumber}${partnerProfile.lifePathNumber}`,
      description: `Your master number compatibility brings you both ${compatibilityPercentage}% off!`
    };
  }
  
  return null;
}
