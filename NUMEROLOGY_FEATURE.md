# Numerology Feature Documentation

## Overview

The Bhartiya Vastra platform now includes a comprehensive numerology system that calculates users' Life Path Numbers based on their date of birth and creates personalized theme profiles. This feature enhances the user experience by providing personalized colors, recommendations, and insights based on ancient numerology principles.

## Features

### 1. Life Path Number Calculator
- Calculates Life Path Numbers (1-9, 11, 22, 33) using the numerology.com methodology
- Supports master numbers (11, 22, 33) which are not reduced to single digits
- Provides detailed personality insights and life purpose information

### 2. Personalized Theme Generation
- Generates unique color schemes based on Life Path Numbers
- Creates theme preferences for UI customization
- Provides lucky colors and numbers for each profile

### 3. User Profile Integration
- Stores numerology data in user profiles
- Applies personalized themes across the platform
- Offers compatibility insights with other Life Path Numbers

## Life Path Number Meanings

### Numbers 1-9 (Basic Numbers)
- **1 - The Pioneer**: Natural born leader, independent, ambitious
- **2 - The Mediator**: Diplomatic, intuitive, cooperative
- **3 - The Communicator**: Creative, expressive, optimistic
- **4 - The Builder**: Practical, reliable, organized
- **5 - The Adventurer**: Freedom-loving, versatile, progressive
- **6 - The Nurturer**: Caring, responsible, compassionate
- **7 - The Seeker**: Analytical, spiritual, intellectual
- **8 - The Achiever**: Ambitious, powerful, materialistic
- **9 - The Humanitarian**: Compassionate, universal, idealistic

### Master Numbers (11, 22, 33)
- **11 - The Intuitive**: Highly spiritual, psychic abilities, inspirational
- **22 - The Master Builder**: Visionary, practical, transformative
- **33 - The Master Teacher**: Healing, nurturing, highest spiritual vibration

## Theme Color Schemes

Each Life Path Number has a unique color palette:

### Example Themes:
- **Life Path 1**: Red primary, Amber secondary, warm and energetic
- **Life Path 2**: Blue primary, Gray secondary, calm and harmonious
- **Life Path 3**: Yellow primary, Pink secondary, creative and vibrant
- **Life Path 4**: Emerald primary, Brown secondary, grounded and practical
- **Life Path 5**: Violet primary, Orange secondary, adventurous and dynamic

## Implementation Details

### Database Schema
```sql
-- User table additions
ALTER TABLE User ADD COLUMN dateOfBirth DateTime;
ALTER TABLE User ADD COLUMN lifePathNumber Int;
ALTER TABLE User ADD COLUMN numerologyProfile String; -- JSON
ALTER TABLE User ADD COLUMN themePreference String; -- JSON
```

### API Endpoints
- `POST /api/auth/signup` - User registration with numerology data
- `GET /api/user/theme` - Fetch user's theme preference
- `POST /api/user/numerology` - Update numerology profile

### Components
- `NumerologyCalculator` - Interactive calculator component
- `NumerologyProfile` - Profile display component
- `ThemeProvider` - Theme application provider

## Usage

### For Users
1. **Sign Up Process**: Users enter their date of birth during registration
2. **Calculator**: Interactive calculator shows Life Path Number and profile
3. **Theme Application**: Platform automatically applies personalized colors
4. **Profile View**: Users can view their numerology profile in their account

### For Developers
1. **Theme Integration**: Use theme classes in components
2. **API Integration**: Fetch user theme data for customization
3. **Component Usage**: Import and use numerology components

## Theme Classes

The system provides CSS classes for theme integration:

```css
.theme-primary { color: var(--theme-primary); }
.theme-primary-bg { background-color: var(--theme-primary); }
.theme-button { background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)); }
.theme-card { border: 1px solid var(--theme-primary)20; }
```

## Benefits

### For Users
- **Personalized Experience**: Colors and themes match their energy
- **Self-Discovery**: Learn about personality traits and life purpose
- **Compatibility**: Understand relationships with other numbers
- **Engagement**: More interactive and meaningful shopping experience

### For Business
- **User Engagement**: Increased time on platform
- **Personalization**: Better product recommendations
- **Brand Differentiation**: Unique feature in e-commerce
- **User Retention**: Personalized experience encourages return visits

## Technical Implementation

### Calculation Algorithm
```typescript
function calculateLifePathNumber(dateOfBirth: Date): number {
  const day = dateOfBirth.getDate();
  const month = dateOfBirth.getMonth() + 1;
  const year = dateOfBirth.getFullYear();
  
  const reducedDay = reduceToSingleDigit(day);
  const reducedMonth = reduceToSingleDigit(month);
  const reducedYear = reduceToSingleDigit(year);
  
  const lifePathNumber = reducedDay + reducedMonth + reducedYear;
  
  // Keep master numbers (11, 22, 33)
  if (lifePathNumber === 11 || lifePathNumber === 22 || lifePathNumber === 33) {
    return lifePathNumber;
  }
  
  return reduceToSingleDigit(lifePathNumber);
}
```

### Theme Application
```typescript
const applyTheme = (colors: ThemeColors) => {
  const root = document.documentElement;
  root.style.setProperty('--theme-primary', colors.primary);
  root.style.setProperty('--theme-secondary', colors.secondary);
  root.style.setProperty('--theme-accent', colors.accent);
  root.style.setProperty('--theme-background', colors.background);
};
```

## Future Enhancements

1. **Compatibility Matching**: Match users with compatible Life Path Numbers
2. **Product Recommendations**: Suggest products based on numerology profile
3. **Seasonal Themes**: Adjust themes based on astrological seasons
4. **Social Features**: Connect users with similar Life Path Numbers
5. **Advanced Calculations**: Include other numerology numbers (Expression, Soul, etc.)

## Testing

### Manual Testing
1. Test calculator with various birth dates
2. Verify theme application across different pages
3. Check profile display accuracy
4. Test signup flow with numerology integration

### Automated Testing
```typescript
describe('Numerology Calculator', () => {
  test('calculates Life Path Number correctly', () => {
    const birthDate = new Date('1990-05-15');
    const result = calculateLifePathNumber(birthDate);
    expect(result).toBe(4); // 1+5+5+1+9+9+0 = 30, 3+0 = 3, but 1+5+5+1+9+9+0 = 30, 3+0 = 3
  });
});
```

## Resources

- [Numerology.com Life Path Calculator](https://www.numerology.com/articles/your-numerology-chart/life-path-number-calculator/)
- [Numerology Meanings and Interpretations](https://www.numerology.com/articles/your-numerology-chart/life-path-number-meanings/)
- [Master Numbers in Numerology](https://www.numerology.com/articles/your-numerology-chart/master-numbers/)

## Support

For technical support or questions about the numerology feature, please refer to the development team or create an issue in the project repository.
