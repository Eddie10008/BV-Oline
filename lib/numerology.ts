export interface NumerologyProfile {
  lifePathNumber: number;
  lifePathMeaning: string;
  personalityTraits: string[];
  luckyColors: string[];
  luckyNumbers: number[];
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  element: string;
  rulingPlanet: string;
  compatibility: number[];
  careerSuggestions: string[];
  lifePurpose: string;
}

export function calculateLifePathNumber(dateOfBirth: Date): number {
  const day = dateOfBirth.getDate();
  const month = dateOfBirth.getMonth() + 1; // getMonth() returns 0-11
  const year = dateOfBirth.getFullYear();

  // Reduce day to single digit
  const reducedDay = reduceToSingleDigit(day);
  
  // Reduce month to single digit
  const reducedMonth = reduceToSingleDigit(month);
  
  // Reduce year to single digit
  const reducedYear = reduceToSingleDigit(year);

  // Add all three numbers
  const lifePathNumber = reducedDay + reducedMonth + reducedYear;
  
  // Reduce to single digit, but keep master numbers (11, 22, 33)
  if (lifePathNumber === 11 || lifePathNumber === 22 || lifePathNumber === 33) {
    return lifePathNumber;
  }
  
  return reduceToSingleDigit(lifePathNumber);
}

function reduceToSingleDigit(num: number): number {
  if (num < 10) return num;
  
  const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  
  // Check for master numbers before reducing
  if (sum === 11 || sum === 22 || sum === 33) {
    return sum;
  }
  
  return sum < 10 ? sum : reduceToSingleDigit(sum);
}

export function generateNumerologyProfile(lifePathNumber: number): NumerologyProfile {
  const profiles: Record<number, NumerologyProfile> = {
    1: {
      lifePathNumber: 1,
      lifePathMeaning: "The Pioneer - Natural born leader with strong individuality and determination",
      personalityTraits: ["Independent", "Ambitious", "Innovative", "Self-reliant", "Courageous"],
      luckyColors: ["Red", "Orange", "Yellow"],
      luckyNumbers: [1, 10, 19, 28],
      themeColors: {
        primary: "#DC2626", // Red
        secondary: "#F59E0B", // Amber
        accent: "#FEF3C7", // Amber-50
        background: "#FEF2F2" // Red-50
      },
      element: "Fire",
      rulingPlanet: "Sun",
      compatibility: [1, 5, 7],
      careerSuggestions: ["Entrepreneur", "Manager", "CEO", "Politician", "Athlete"],
      lifePurpose: "To lead, inspire, and create new paths for others to follow"
    },
    2: {
      lifePathNumber: 2,
      lifePathMeaning: "The Mediator - Diplomatic peacemaker with strong intuition and sensitivity",
      personalityTraits: ["Diplomatic", "Intuitive", "Cooperative", "Patient", "Harmonious"],
      luckyColors: ["White", "Silver", "Light Blue"],
      luckyNumbers: [2, 11, 20, 29],
      themeColors: {
        primary: "#3B82F6", // Blue
        secondary: "#E5E7EB", // Gray-200
        accent: "#DBEAFE", // Blue-50
        background: "#F8FAFC" // Slate-50
      },
      element: "Water",
      rulingPlanet: "Moon",
      compatibility: [2, 4, 8],
      careerSuggestions: ["Counselor", "Mediator", "Nurse", "Teacher", "Artist"],
      lifePurpose: "To bring harmony, balance, and cooperation to relationships"
    },
    3: {
      lifePathNumber: 3,
      lifePathMeaning: "The Communicator - Creative and expressive with natural charisma",
      personalityTraits: ["Creative", "Expressive", "Optimistic", "Sociable", "Inspiring"],
      luckyColors: ["Yellow", "Pink", "Light Green"],
      luckyNumbers: [3, 12, 21, 30],
      themeColors: {
        primary: "#EAB308", // Yellow
        secondary: "#F472B6", // Pink-400
        accent: "#FEFCE8", // Yellow-50
        background: "#FDF2F8" // Pink-50
      },
      element: "Air",
      rulingPlanet: "Jupiter",
      compatibility: [3, 6, 9],
      careerSuggestions: ["Writer", "Actor", "Journalist", "Designer", "Public Speaker"],
      lifePurpose: "To inspire, entertain, and communicate ideas that uplift humanity"
    },
    4: {
      lifePathNumber: 4,
      lifePathMeaning: "The Builder - Practical and methodical with strong work ethic",
      personalityTraits: ["Practical", "Reliable", "Organized", "Hardworking", "Loyal"],
      luckyColors: ["Green", "Brown", "Navy Blue"],
      luckyNumbers: [4, 13, 22, 31],
      themeColors: {
        primary: "#059669", // Emerald
        secondary: "#92400E", // Amber-800
        accent: "#ECFDF5", // Emerald-50
        background: "#FEF7ED" // Amber-50
      },
      element: "Earth",
      rulingPlanet: "Uranus",
      compatibility: [2, 4, 8],
      careerSuggestions: ["Engineer", "Architect", "Accountant", "Scientist", "Administrator"],
      lifePurpose: "To build solid foundations and create lasting structures"
    },
    5: {
      lifePathNumber: 5,
      lifePathMeaning: "The Adventurer - Freedom-loving explorer with versatile nature",
      personalityTraits: ["Adventurous", "Versatile", "Progressive", "Energetic", "Curious"],
      luckyColors: ["Purple", "Orange", "Turquoise"],
      luckyNumbers: [5, 14, 23, 32],
      themeColors: {
        primary: "#7C3AED", // Violet
        secondary: "#F97316", // Orange-500
        accent: "#F3E8FF", // Violet-50
        background: "#FFF7ED" // Orange-50
      },
      element: "Air",
      rulingPlanet: "Mercury",
      compatibility: [1, 5, 7],
      careerSuggestions: ["Travel Agent", "Salesperson", "Journalist", "Photographer", "Entrepreneur"],
      lifePurpose: "To experience life fully and inspire others to embrace change"
    },
    6: {
      lifePathNumber: 6,
      lifePathMeaning: "The Nurturer - Caring and responsible with strong sense of duty",
      personalityTraits: ["Nurturing", "Responsible", "Compassionate", "Artistic", "Protective"],
      luckyColors: ["Pink", "Rose", "Light Blue"],
      luckyNumbers: [6, 15, 24, 33],
      themeColors: {
        primary: "#EC4899", // Pink-500
        secondary: "#F43F5E", // Rose-500
        accent: "#FDF2F8", // Pink-50
        background: "#FFF1F2" // Rose-50
      },
      element: "Earth",
      rulingPlanet: "Venus",
      compatibility: [3, 6, 9],
      careerSuggestions: ["Teacher", "Nurse", "Social Worker", "Interior Designer", "Chef"],
      lifePurpose: "To care for others and create beauty and harmony in the world"
    },
    7: {
      lifePathNumber: 7,
      lifePathMeaning: "The Seeker - Analytical and spiritual with deep inner wisdom",
      personalityTraits: ["Analytical", "Spiritual", "Intellectual", "Mysterious", "Perfectionist"],
      luckyColors: ["Purple", "Indigo", "White"],
      luckyNumbers: [7, 16, 25, 34],
      themeColors: {
        primary: "#4F46E5", // Indigo
        secondary: "#7C3AED", // Violet
        accent: "#EEF2FF", // Indigo-50
        background: "#FAFAFA" // Gray-50
      },
      element: "Water",
      rulingPlanet: "Neptune",
      compatibility: [1, 5, 7],
      careerSuggestions: ["Scientist", "Researcher", "Philosopher", "Psychologist", "Mystic"],
      lifePurpose: "To seek truth, wisdom, and spiritual understanding"
    },
    8: {
      lifePathNumber: 8,
      lifePathMeaning: "The Achiever - Ambitious and powerful with strong material focus",
      personalityTraits: ["Ambitious", "Powerful", "Materialistic", "Efficient", "Authoritative"],
      luckyColors: ["Gold", "Brown", "Dark Blue"],
      luckyNumbers: [8, 17, 26, 35],
      themeColors: {
        primary: "#CA8A04", // Yellow-600
        secondary: "#92400E", // Amber-800
        accent: "#FEFCE8", // Yellow-50
        background: "#FEF7ED" // Amber-50
      },
      element: "Earth",
      rulingPlanet: "Saturn",
      compatibility: [2, 4, 8],
      careerSuggestions: ["CEO", "Banker", "Lawyer", "Real Estate", "Investor"],
      lifePurpose: "To achieve material success and use power wisely"
    },
    9: {
      lifePathNumber: 9,
      lifePathMeaning: "The Humanitarian - Compassionate and universal with broad perspective",
      personalityTraits: ["Compassionate", "Universal", "Idealistic", "Tolerant", "Wise"],
      luckyColors: ["White", "Gold", "Purple"],
      luckyNumbers: [9, 18, 27, 36],
      themeColors: {
        primary: "#8B5CF6", // Violet-500
        secondary: "#CA8A04", // Yellow-600
        accent: "#F3E8FF", // Violet-50
        background: "#FEFCE8" // Yellow-50
      },
      element: "Fire",
      rulingPlanet: "Mars",
      compatibility: [3, 6, 9],
      careerSuggestions: ["Humanitarian", "Counselor", "Artist", "Writer", "Teacher"],
      lifePurpose: "To serve humanity and bring universal love and compassion"
    },
    11: {
      lifePathNumber: 11,
      lifePathMeaning: "The Intuitive - Highly spiritual with psychic abilities and inspiration",
      personalityTraits: ["Intuitive", "Spiritual", "Inspirational", "Visionary", "Sensitive"],
      luckyColors: ["Silver", "White", "Light Blue"],
      luckyNumbers: [11, 22, 33, 44],
      themeColors: {
        primary: "#6B7280", // Gray-500
        secondary: "#E5E7EB", // Gray-200
        accent: "#F9FAFB", // Gray-50
        background: "#F8FAFC" // Slate-50
      },
      element: "Air",
      rulingPlanet: "Uranus",
      compatibility: [2, 4, 7, 11],
      careerSuggestions: ["Psychic", "Healer", "Spiritual Teacher", "Artist", "Counselor"],
      lifePurpose: "To inspire others through spiritual wisdom and intuitive guidance"
    },
    22: {
      lifePathNumber: 22,
      lifePathMeaning: "The Master Builder - Visionary with ability to manifest dreams",
      personalityTraits: ["Visionary", "Practical", "Ambitious", "Masterful", "Transformative"],
      luckyColors: ["Deep Blue", "Purple", "Gold"],
      luckyNumbers: [22, 33, 44, 55],
      themeColors: {
        primary: "#1E40AF", // Blue-800
        secondary: "#7C3AED", // Violet
        accent: "#DBEAFE", // Blue-50
        background: "#F3E8FF" // Violet-50
      },
      element: "Earth",
      rulingPlanet: "Pluto",
      compatibility: [4, 8, 11, 22],
      careerSuggestions: ["Architect", "Engineer", "Visionary Leader", "Inventor", "Master Teacher"],
      lifePurpose: "To build and manifest grand visions that benefit humanity"
    },
    33: {
      lifePathNumber: 33,
      lifePathMeaning: "The Master Teacher - Highest spiritual vibration with healing abilities",
      personalityTraits: ["Healing", "Nurturing", "Spiritual", "Compassionate", "Masterful"],
      luckyColors: ["White", "Pink", "Light Green"],
      luckyNumbers: [33, 44, 55, 66],
      themeColors: {
        primary: "#EC4899", // Pink-500
        secondary: "#10B981", // Emerald-500
        accent: "#FDF2F8", // Pink-50
        background: "#ECFDF5" // Emerald-50
      },
      element: "Water",
      rulingPlanet: "Neptune",
      compatibility: [6, 9, 11, 22, 33],
      careerSuggestions: ["Spiritual Healer", "Master Teacher", "Counselor", "Humanitarian", "Artist"],
      lifePurpose: "To heal, teach, and serve humanity with unconditional love"
    }
  };

  return profiles[lifePathNumber] || profiles[1];
}

export function generateThemeFromNumerology(profile: NumerologyProfile) {
  return {
    colors: profile.themeColors,
    fonts: {
      heading: profile.lifePathNumber <= 3 ? 'serif' : 'sans-serif',
      body: profile.lifePathNumber >= 7 ? 'monospace' : 'sans-serif'
    },
    spacing: profile.lifePathNumber % 2 === 0 ? 'comfortable' : 'compact',
    animation: profile.lifePathNumber <= 5 ? 'energetic' : 'calm'
  };
}
