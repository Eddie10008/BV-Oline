import { NumerologyProfile } from './numerology';

export interface GemstoneRecommendation {
  primaryGemstone: string;
  secondaryGemstones: string[];
  metalRecommendations: string[];
  jewelryTypes: string[];
  spiritualBenefits: string[];
  healingProperties: string[];
  bestWearingTimes: string[];
  chakraAlignment: string[];
  priceRange: string;
  description: string;
}

export interface JewelryRecommendation {
  type: string;
  gemstone: string;
  metal: string;
  design: string;
  spiritualPurpose: string;
  bestOccasions: string[];
  priceEstimate: string;
  imageDescription: string;
}

// Gemstone mappings for each Life Path Number
const gemstoneMappings: Record<number, GemstoneRecommendation> = {
  1: {
    primaryGemstone: "Ruby",
    secondaryGemstones: ["Carnelian", "Red Jasper", "Garnet"],
    metalRecommendations: ["Gold", "Rose Gold", "Copper"],
    jewelryTypes: ["Rings", "Pendants", "Bracelets", "Earrings"],
    spiritualBenefits: [
      "Enhances leadership qualities",
      "Boosts confidence and courage",
      "Stimulates creativity and innovation",
      "Promotes independence and self-reliance"
    ],
    healingProperties: [
      "Improves blood circulation",
      "Energizes the root chakra",
      "Enhances vitality and strength",
      "Supports heart health"
    ],
    bestWearingTimes: [
      "New beginnings and fresh starts",
      "Important meetings and presentations",
      "When taking on leadership roles",
      "During creative projects"
    ],
    chakraAlignment: ["Root Chakra", "Sacral Chakra"],
    priceRange: "₹5,000 - ₹50,000",
    description: "Ruby, the stone of kings, perfectly aligns with your pioneering spirit. Its fiery red energy enhances your natural leadership qualities and helps you blaze new trails with confidence and courage."
  },

  2: {
    primaryGemstone: "Pearl",
    secondaryGemstones: ["Moonstone", "Opal", "Aquamarine"],
    metalRecommendations: ["Silver", "White Gold", "Platinum"],
    jewelryTypes: ["Necklaces", "Earrings", "Bracelets", "Rings"],
    spiritualBenefits: [
      "Enhances intuition and psychic abilities",
      "Promotes harmony and balance",
      "Strengthens relationships and partnerships",
      "Calms emotions and reduces stress"
    ],
    healingProperties: [
      "Supports emotional healing",
      "Improves digestive health",
      "Enhances skin health",
      "Promotes peaceful sleep"
    ],
    bestWearingTimes: [
      "Meditation and spiritual practices",
      "Relationship-building activities",
      "When seeking inner peace",
      "During diplomatic situations"
    ],
    chakraAlignment: ["Crown Chakra", "Third Eye Chakra"],
    priceRange: "₹3,000 - ₹35,000",
    description: "Pearl, the stone of the moon, resonates with your diplomatic nature. Its gentle, nurturing energy helps you maintain harmony in relationships and enhances your intuitive abilities."
  },

  3: {
    primaryGemstone: "Citrine",
    secondaryGemstones: ["Yellow Sapphire", "Amber", "Tiger's Eye"],
    metalRecommendations: ["Gold", "Yellow Gold", "Brass"],
    jewelryTypes: ["Pendants", "Rings", "Earrings", "Bracelets"],
    spiritualBenefits: [
      "Amplifies creativity and self-expression",
      "Attracts abundance and prosperity",
      "Enhances communication skills",
      "Boosts optimism and joy"
    ],
    healingProperties: [
      "Improves metabolism",
      "Enhances mental clarity",
      "Supports digestive health",
      "Boosts energy levels"
    ],
    bestWearingTimes: [
      "Creative projects and artistic endeavors",
      "Social gatherings and parties",
      "When giving presentations",
      "During joyful celebrations"
    ],
    chakraAlignment: ["Solar Plexus Chakra", "Sacral Chakra"],
    priceRange: "₹2,000 - ₹25,000",
    description: "Citrine, the stone of abundance, perfectly matches your creative and expressive nature. Its sunny yellow energy helps you communicate your ideas with clarity and attracts success."
  },

  4: {
    primaryGemstone: "Emerald",
    secondaryGemstones: ["Green Aventurine", "Jade", "Malachite"],
    metalRecommendations: ["Gold", "Green Gold", "Bronze"],
    jewelryTypes: ["Rings", "Pendants", "Bracelets", "Earrings"],
    spiritualBenefits: [
      "Enhances stability and grounding",
      "Promotes patience and perseverance",
      "Strengthens practical wisdom",
      "Supports manifestation of goals"
    ],
    healingProperties: [
      "Improves heart health",
      "Enhances vision and eye health",
      "Supports respiratory system",
      "Promotes emotional balance"
    ],
    bestWearingTimes: [
      "When working on long-term projects",
      "During important decisions",
      "When seeking stability",
      "During financial planning"
    ],
    chakraAlignment: ["Heart Chakra", "Root Chakra"],
    priceRange: "₹8,000 - ₹80,000",
    description: "Emerald, the stone of wisdom, aligns with your practical and reliable nature. Its deep green energy helps you build solid foundations and manifest your goals with patience."
  },

  5: {
    primaryGemstone: "Aquamarine",
    secondaryGemstones: ["Blue Topaz", "Sapphire", "Lapis Lazuli"],
    metalRecommendations: ["Silver", "White Gold", "Platinum"],
    jewelryTypes: ["Pendants", "Earrings", "Rings", "Bracelets"],
    spiritualBenefits: [
      "Enhances freedom and adventure",
      "Promotes clear communication",
      "Supports travel and exploration",
      "Calms restless energy"
    ],
    healingProperties: [
      "Supports throat and respiratory health",
      "Reduces stress and anxiety",
      "Improves communication",
      "Enhances intuition"
    ],
    bestWearingTimes: [
      "Before travel and adventures",
      "During important conversations",
      "When seeking new experiences",
      "During meditation and reflection"
    ],
    chakraAlignment: ["Throat Chakra", "Third Eye Chakra"],
    priceRange: "₹4,000 - ₹40,000",
    description: "Aquamarine, the stone of the sea, perfectly matches your adventurous and free-spirited nature. Its calming blue energy helps you communicate clearly and navigate life's changes."
  },

  6: {
    primaryGemstone: "Rose Quartz",
    secondaryGemstones: ["Pink Sapphire", "Rhodochrosite", "Morganite"],
    metalRecommendations: ["Rose Gold", "Pink Gold", "Copper"],
    jewelryTypes: ["Necklaces", "Rings", "Bracelets", "Earrings"],
    spiritualBenefits: [
      "Enhances love and compassion",
      "Promotes healing relationships",
      "Strengthens nurturing qualities",
      "Supports family harmony"
    ],
    healingProperties: [
      "Supports heart health",
      "Promotes emotional healing",
      "Enhances skin health",
      "Reduces stress and anxiety"
    ],
    bestWearingTimes: [
      "Family gatherings and celebrations",
      "When caring for others",
      "During romantic moments",
      "When seeking inner peace"
    ],
    chakraAlignment: ["Heart Chakra", "Crown Chakra"],
    priceRange: "₹1,500 - ₹20,000",
    description: "Rose Quartz, the stone of universal love, resonates with your nurturing and caring nature. Its gentle pink energy helps you create harmonious relationships and heal emotional wounds."
  },

  7: {
    primaryGemstone: "Amethyst",
    secondaryGemstones: ["Clear Quartz", "Selenite", "Lapis Lazuli"],
    metalRecommendations: ["Silver", "White Gold", "Platinum"],
    jewelryTypes: ["Pendants", "Rings", "Earrings", "Bracelets"],
    spiritualBenefits: [
      "Enhances spiritual awareness",
      "Promotes deep meditation",
      "Strengthens intuition",
      "Supports psychic development"
    ],
    healingProperties: [
      "Improves sleep quality",
      "Reduces stress and anxiety",
      "Enhances mental clarity",
      "Supports nervous system"
    ],
    bestWearingTimes: [
      "During meditation and spiritual practices",
      "When seeking answers",
      "Before sleep for peaceful rest",
      "During study and research"
    ],
    chakraAlignment: ["Crown Chakra", "Third Eye Chakra"],
    priceRange: "₹2,000 - ₹30,000",
    description: "Amethyst, the stone of spiritual wisdom, perfectly aligns with your analytical and spiritual nature. Its purple energy helps you connect with higher consciousness and find inner peace."
  },

  8: {
    primaryGemstone: "Diamond",
    secondaryGemstones: ["White Sapphire", "Clear Quartz", "Zircon"],
    metalRecommendations: ["Platinum", "White Gold", "Silver"],
    jewelryTypes: ["Rings", "Pendants", "Earrings", "Bracelets"],
    spiritualBenefits: [
      "Enhances manifestation power",
      "Promotes success and achievement",
      "Strengthens willpower",
      "Attracts abundance and prosperity"
    ],
    healingProperties: [
      "Improves brain function",
      "Enhances clarity of thought",
      "Supports nervous system",
      "Promotes overall vitality"
    ],
    bestWearingTimes: [
      "Important business meetings",
      "When setting ambitious goals",
      "During financial decisions",
      "When seeking recognition"
    ],
    chakraAlignment: ["Crown Chakra", "Solar Plexus Chakra"],
    priceRange: "₹15,000 - ₹2,00,000",
    description: "Diamond, the king of gemstones, perfectly matches your ambitious and achievement-oriented nature. Its brilliant energy helps you manifest your goals and attract success."
  },

  9: {
    primaryGemstone: "Lapis Lazuli",
    secondaryGemstones: ["Sapphire", "Azurite", "Sodalite"],
    metalRecommendations: ["Gold", "Silver", "Bronze"],
    jewelryTypes: ["Pendants", "Rings", "Bracelets", "Earrings"],
    spiritualBenefits: [
      "Enhances spiritual enlightenment",
      "Promotes universal love",
      "Strengthens wisdom and knowledge",
      "Supports humanitarian work"
    ],
    healingProperties: [
      "Improves communication",
      "Enhances mental clarity",
      "Supports throat health",
      "Promotes emotional balance"
    ],
    bestWearingTimes: [
      "During spiritual practices",
      "When helping others",
      "During teaching or mentoring",
      "When seeking higher wisdom"
    ],
    chakraAlignment: ["Third Eye Chakra", "Throat Chakra"],
    priceRange: "₹3,000 - ₹35,000",
    description: "Lapis Lazuli, the stone of wisdom, resonates with your humanitarian and spiritually evolved nature. Its deep blue energy helps you share your wisdom and serve humanity."
  },

  11: {
    primaryGemstone: "Labradorite",
    secondaryGemstones: ["Moonstone", "Opal", "Amethyst"],
    metalRecommendations: ["Silver", "White Gold", "Platinum"],
    jewelryTypes: ["Pendants", "Rings", "Earrings", "Bracelets"],
    spiritualBenefits: [
      "Enhances psychic abilities and intuition",
      "Promotes spiritual awakening",
      "Strengthens connection to higher realms",
      "Supports mystical experiences"
    ],
    healingProperties: [
      "Improves nervous system",
      "Enhances mental clarity",
      "Reduces stress and anxiety",
      "Promotes peaceful sleep"
    ],
    bestWearingTimes: [
      "During meditation and spiritual practices",
      "When receiving intuitive guidance",
      "During psychic development work",
      "When seeking spiritual answers"
    ],
    chakraAlignment: ["Third Eye Chakra", "Crown Chakra"],
    priceRange: "₹5,000 - ₹60,000",
    description: "Labradorite, the stone of magic, perfectly aligns with your master intuitive energy. Its mystical iridescence helps you access higher wisdom and enhance your psychic abilities."
  },

  22: {
    primaryGemstone: "Clear Quartz",
    secondaryGemstones: ["Diamond", "White Sapphire", "Selenite"],
    metalRecommendations: ["Platinum", "White Gold", "Silver"],
    jewelryTypes: ["Pendants", "Rings", "Earrings", "Bracelets"],
    spiritualBenefits: [
      "Amplifies manifestation power",
      "Promotes visionary thinking",
      "Strengthens spiritual connection",
      "Supports building and creation"
    ],
    healingProperties: [
      "Improves overall health",
      "Enhances energy levels",
      "Supports all chakras",
      "Promotes clarity and focus"
    ],
    bestWearingTimes: [
      "When working on major projects",
      "During manifestation practices",
      "When building or creating",
      "During spiritual leadership"
    ],
    chakraAlignment: ["All Chakras", "Crown Chakra"],
    priceRange: "₹8,000 - ₹1,00,000",
    description: "Clear Quartz, the master healer, perfectly matches your master builder energy. Its pure, amplifying energy helps you manifest your grand visions and create lasting impact."
  },

  33: {
    primaryGemstone: "Moldavite",
    secondaryGemstones: ["Clear Quartz", "Amethyst", "Diamond"],
    metalRecommendations: ["Platinum", "White Gold", "Silver"],
    jewelryTypes: ["Pendants", "Rings", "Earrings", "Bracelets"],
    spiritualBenefits: [
      "Enhances spiritual transformation",
      "Promotes healing abilities",
      "Strengthens connection to divine",
      "Supports teaching and mentoring"
    ],
    healingProperties: [
      "Promotes spiritual healing",
      "Enhances energy field",
      "Supports transformation",
      "Improves spiritual awareness"
    ],
    bestWearingTimes: [
      "During spiritual teaching",
      "When healing others",
      "During deep meditation",
      "When seeking divine guidance"
    ],
    chakraAlignment: ["All Chakras", "Crown Chakra"],
    priceRange: "₹20,000 - ₹5,00,000",
    description: "Moldavite, the stone of transformation, perfectly aligns with your master teacher energy. Its powerful extraterrestrial energy helps you facilitate healing and spiritual growth in others."
  }
};

export function getGemstoneRecommendation(lifePathNumber: number): GemstoneRecommendation {
  return gemstoneMappings[lifePathNumber] || gemstoneMappings[1];
}

export function generateJewelryRecommendations(profile: NumerologyProfile): JewelryRecommendation[] {
  const gemstoneRec = getGemstoneRecommendation(profile.lifePathNumber);
  
  const recommendations: JewelryRecommendation[] = [
    {
      type: "Pendant",
      gemstone: gemstoneRec.primaryGemstone,
      metal: gemstoneRec.metalRecommendations[0],
      design: `${gemstoneRec.primaryGemstone} pendant with ${profile.lifePathNumber} significance`,
      spiritualPurpose: `Enhance your ${profile.lifePathNumber} energy and ${gemstoneRec.spiritualBenefits[0].toLowerCase()}`,
      bestOccasions: ["Daily wear", "Meditation", "Important meetings"],
      priceEstimate: gemstoneRec.priceRange,
      imageDescription: `A beautiful ${gemstoneRec.primaryGemstone} pendant set in ${gemstoneRec.metalRecommendations[0]}`
    },
    {
      type: "Ring",
      gemstone: gemstoneRec.primaryGemstone,
      metal: gemstoneRec.metalRecommendations[0],
      design: `${gemstoneRec.primaryGemstone} ring with personalized numerology design`,
      spiritualPurpose: `Amplify your Life Path ${profile.lifePathNumber} energy and manifest your goals`,
      bestOccasions: ["Special occasions", "Power meetings", "Goal setting"],
      priceEstimate: gemstoneRec.priceRange,
      imageDescription: `An elegant ${gemstoneRec.primaryGemstone} ring featuring numerology-inspired design`
    },
    {
      type: "Bracelet",
      gemstone: gemstoneRec.secondaryGemstones[0],
      metal: gemstoneRec.metalRecommendations[1] || gemstoneRec.metalRecommendations[0],
      design: `${gemstoneRec.secondaryGemstones[0]} bracelet with ${profile.lifePathNumber} beads`,
      spiritualPurpose: `Balance your energy and enhance ${gemstoneRec.healingProperties[0].toLowerCase()}`,
      bestOccasions: ["Daily wear", "Healing sessions", "Stress relief"],
      priceEstimate: gemstoneRec.priceRange,
      imageDescription: `A healing ${gemstoneRec.secondaryGemstones[0]} bracelet with numerology beads`
    },
    {
      type: "Earrings",
      gemstone: gemstoneRec.primaryGemstone,
      metal: gemstoneRec.metalRecommendations[0],
      design: `${gemstoneRec.primaryGemstone} earrings with spiritual symbolism`,
      spiritualPurpose: `Enhance your ${profile.lifePathNumber} energy and improve communication`,
      bestOccasions: ["Social gatherings", "Presentations", "Creative work"],
      priceEstimate: gemstoneRec.priceRange,
      imageDescription: `Stunning ${gemstoneRec.primaryGemstone} earrings with spiritual design`
    }
  ];

  // Add special recommendations for master numbers
  if (profile.lifePathNumber === 11 || profile.lifePathNumber === 22 || profile.lifePathNumber === 33) {
    recommendations.push({
      type: "Master Number Set",
      gemstone: `${gemstoneRec.primaryGemstone} + ${gemstoneRec.secondaryGemstones.join(", ")}`,
      metal: gemstoneRec.metalRecommendations[0],
      design: `Complete master number ${profile.lifePathNumber} jewelry set`,
      spiritualPurpose: `Maximize your master number energy and spiritual potential`,
      bestOccasions: ["Spiritual practices", "Master number celebrations", "Important life events"],
      priceEstimate: `₹50,000 - ₹10,00,000`,
      imageDescription: `A complete master number ${profile.lifePathNumber} jewelry collection`
    });
  }

  return recommendations;
}

export function getChakraAlignment(lifePathNumber: number): string[] {
  const gemstoneRec = getGemstoneRecommendation(lifePathNumber);
  return gemstoneRec.chakraAlignment;
}

export function getHealingProperties(lifePathNumber: number): string[] {
  const gemstoneRec = getGemstoneRecommendation(lifePathNumber);
  return gemstoneRec.healingProperties;
}

export function getSpiritualBenefits(lifePathNumber: number): string[] {
  const gemstoneRec = getGemstoneRecommendation(lifePathNumber);
  return gemstoneRec.spiritualBenefits;
}
