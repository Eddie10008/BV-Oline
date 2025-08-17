'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

interface ThemeContextType {
  themeColors: ThemeColors | null;
  isThemeLoaded: boolean;
  applyTheme: (colors: ThemeColors) => void;
  resetTheme: () => void;
}

const defaultTheme: ThemeColors = {
  primary: '#8B5CF6', // Default purple
  secondary: '#F59E0B', // Default amber
  accent: '#F3E8FF', // Default purple-50
  background: '#FAFAFA' // Default gray-50
};

const ThemeContext = createContext<ThemeContextType>({
  themeColors: null,
  isThemeLoaded: false,
  applyTheme: () => {},
  resetTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [themeColors, setThemeColors] = useState<ThemeColors | null>(null);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    if (session?.user?.id) {
      // Fetch user's theme preference
      fetchUserTheme();
    } else {
      // Reset to default theme when not logged in
      resetTheme();
    }
  }, [session]);

  const fetchUserTheme = async () => {
    try {
      const response = await fetch('/api/user/theme');
      if (response.ok) {
        const data = await response.json();
        if (data.themePreference) {
          const colors = JSON.parse(data.themePreference);
          applyTheme(colors);
        } else {
          resetTheme();
        }
      } else {
        resetTheme();
      }
    } catch (error) {
      console.error('Error fetching user theme:', error);
      resetTheme();
    }
  };

  const applyTheme = (colors: ThemeColors) => {
    setThemeColors(colors);
    setIsThemeLoaded(true);
    
    // Apply CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-background', colors.background);
    
    // Apply additional theme-specific styles
    applyThemeStyles(colors);
  };

  const resetTheme = () => {
    setThemeColors(defaultTheme);
    setIsThemeLoaded(true);
    
    // Reset CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', defaultTheme.primary);
    root.style.setProperty('--theme-secondary', defaultTheme.secondary);
    root.style.setProperty('--theme-accent', defaultTheme.accent);
    root.style.setProperty('--theme-background', defaultTheme.background);
    
    // Reset theme styles
    applyThemeStyles(defaultTheme);
  };

  const applyThemeStyles = (colors: ThemeColors) => {
    // Create or update theme style element
    let themeStyle = document.getElementById('theme-styles');
    if (!themeStyle) {
      themeStyle = document.createElement('style');
      themeStyle.id = 'theme-styles';
      document.head.appendChild(themeStyle);
    }

    // Generate CSS with theme colors
    const css = `
      .theme-primary { color: ${colors.primary} !important; }
      .theme-primary-bg { background-color: ${colors.primary} !important; }
      .theme-primary-border { border-color: ${colors.primary} !important; }
      
      .theme-secondary { color: ${colors.secondary} !important; }
      .theme-secondary-bg { background-color: ${colors.secondary} !important; }
      .theme-secondary-border { border-color: ${colors.secondary} !important; }
      
      .theme-accent { color: ${colors.accent} !important; }
      .theme-accent-bg { background-color: ${colors.accent} !important; }
      .theme-accent-border { border-color: ${colors.accent} !important; }
      
      .theme-background { background-color: ${colors.background} !important; }
      
      .theme-gradient {
        background: linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20) !important;
      }
      
      .theme-button {
        background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}) !important;
        color: white !important;
      }
      
      .theme-button:hover {
        background: linear-gradient(135deg, ${colors.primary}dd, ${colors.secondary}dd) !important;
      }
      
      .theme-card {
        background: white !important;
        border: 1px solid ${colors.primary}20 !important;
        box-shadow: 0 4px 6px -1px ${colors.primary}10 !important;
      }
      
      .theme-input:focus {
        border-color: ${colors.primary} !important;
        box-shadow: 0 0 0 3px ${colors.primary}20 !important;
      }
      
      .theme-link {
        color: ${colors.primary} !important;
      }
      
      .theme-link:hover {
        color: ${colors.secondary} !important;
      }
    `;

    themeStyle.textContent = css;
  };

  return (
    <ThemeContext.Provider value={{
      themeColors,
      isThemeLoaded,
      applyTheme,
      resetTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
