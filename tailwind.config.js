/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Spiritual Color Palette
        spiritual: {
          // Red - Passion, love, energy, sacrifice
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          // Orange - Energy, happiness, vitality, spirituality
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          // Yellow - Happiness, hope, intellect, enlightenment
          yellow: {
            50: '#fefce8',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          // Green - Nature, life, growth, new beginnings
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          // Blue - Calmness, peace, responsibility, wisdom
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          // Purple - Royalty, dignity, spirituality, intuition
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#581c87',
          },
          // Indigo - Intuition, wisdom, spiritual insight
          indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
          },
          // Teal - Communication, healing, emotional balance
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          // Magenta - Universal love, compassion, spiritual awakening
          magenta: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
            600: '#db2777',
            700: '#be185d',
            800: '#9d174d',
            900: '#831843',
          },
          // Gold - Glory, wealth, spiritual enlightenment
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          // Silver - Redemption, clarity, moon's energy
          silver: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          // White - Purity, innocence, peace, new beginnings
          white: '#ffffff',
          // Black - Protection, uncrossing, warding off negative energy
          black: '#000000',
          // Brown - Earth, stability, God's connection to humanity
          brown: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
          },
        },
        // Legacy colors for compatibility
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        indian: {
          red: '#FF6B6B',
          gold: '#FFD700',
          pink: '#FF69B4',
          purple: '#9370DB',
          orange: '#FF8C00',
          teal: '#20B2AA',
        },
        diamond: {
          white: '#FFFFFF',
          crystal: '#F8FAFC',
          pearl: '#F1F5F9',
          platinum: '#E2E8F0',
          silver: '#CBD5E1',
          steel: '#94A3B8',
          charcoal: '#64748B',
          slate: '#475569',
          midnight: '#334155',
          obsidian: '#1E293B',
          black: '#0F172A',
          gold: '#D4AF37',
          goldLight: '#F4E4BC',
          goldDark: '#B8860B',
          crystalBlue: '#E0F2FE',
          sapphire: '#0EA5E9',
          sapphireLight: '#38BDF8',
          sapphireDark: '#0369A1',
          emerald: '#10B981',
          emeraldLight: '#34D399',
          emeraldDark: '#059669',
          ruby: '#EF4444',
          rubyLight: '#F87171',
          rubyDark: '#DC2626',
          amethyst: '#8B5CF6',
          amethystLight: '#A78BFA',
          amethystDark: '#7C3AED',
        },
        modern: {
          purple: '#8B5CF6',
          purpleLight: '#A78BFA',
          purpleDark: '#7C3AED',
          gold: '#F59E0B',
          goldLight: '#FBBF24',
          goldDark: '#D97706',
          blue: '#3B82F6',
          blueLight: '#60A5FA',
          blueDark: '#2563EB',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          white: '#FFFFFF',
          black: '#000000',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        luxury: ['Cormorant Garamond', 'serif'],
        spiritual: ['Crimson Text', 'serif'],
        mystical: ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'diamond-sparkle': 'diamondSparkle 4s ease-in-out infinite',
        'diamond-shine': 'diamondShine 4s ease-in-out infinite',
        'crystal-shine': 'crystalShine 3s ease-in-out infinite',
        'luxury-fade': 'luxuryFade 2s ease-in-out infinite alternate',
        'spiritual-glow': 'spiritualGlow 4s ease-in-out infinite alternate',
        'mystical-float': 'mysticalFloat 8s ease-in-out infinite',
        'aura-pulse': 'auraPulse 6s ease-in-out infinite',
        'chakra-spin': 'chakraSpin 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        diamondSparkle: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1) rotate(0deg)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1) rotate(180deg)',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.6)'
          },
        },
        diamondShine: {
          '0%': { 
            backgroundPosition: '-200% center',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
          },
          '50%': { 
            backgroundPosition: '200% center',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.6)'
          },
          '100%': { 
            backgroundPosition: '-200% center',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
          },
        },
        crystalShine: {
          '0%, 100%': { 
            opacity: '0.7',
            transform: 'scale(1)',
            boxShadow: '0 0 15px rgba(224, 242, 254, 0.4)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)',
            boxShadow: '0 0 25px rgba(224, 242, 254, 0.7)'
          },
        },
        luxuryFade: {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.02)' },
        },
        spiritualGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        mysticalFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            transform: 'translateY(-15px) rotate(1deg)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            transform: 'translateY(-25px) rotate(0deg)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            transform: 'translateY(-15px) rotate(-1deg)',
            filter: 'hue-rotate(270deg)'
          },
        },
        auraPulse: {
          '0%, 100%': { 
            opacity: '0.4',
            transform: 'scale(1)',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.1)',
            boxShadow: '0 0 50px rgba(34, 197, 94, 0.6)'
          },
        },
        chakraSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'modern': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modern-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
        'diamond': '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)',
        'diamond-lg': '0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.3)',
        'luxury': '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
        'luxury-lg': '0 30px 60px rgba(0, 0, 0, 0.2), 0 15px 30px rgba(0, 0, 0, 0.15)',
        'crystal': '0 8px 32px rgba(255, 255, 255, 0.3), 0 4px 16px rgba(255, 255, 255, 0.2)',
        'shadow-diamond': '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
        'shadow-luxury': '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
        'shadow-luxury-lg': '0 30px 60px rgba(0, 0, 0, 0.2), 0 15px 30px rgba(0, 0, 0, 0.15)',
        'spiritual': '0 0 30px rgba(236, 72, 153, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)',
        'spiritual-lg': '0 0 50px rgba(236, 72, 153, 0.5), 0 0 100px rgba(139, 92, 246, 0.3)',
        'aura': '0 0 40px rgba(34, 197, 94, 0.4), 0 0 80px rgba(34, 197, 94, 0.2)',
        'chakra': '0 0 35px rgba(168, 85, 247, 0.4), 0 0 70px rgba(168, 85, 247, 0.2)',
      },
      backgroundImage: {
        'diamond-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 25%, #E0F2FE 50%, #F8FAFC 75%, #FFFFFF 100%)',
        'crystal-gradient': 'linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 25%, #F1F5F9 50%, #FFFFFF 75%, #E0F2FE 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #1E293B 75%, #0F172A 100%)',
        'sparkle': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
        'gradient-diamond': 'linear-gradient(135deg, #D4AF37 0%, #F4E4BC 25%, #E0F2FE 50%, #F4E4BC 75%, #D4AF37 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4E4BC 50%, #D4AF37 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #1E293B 75%, #0F172A 100%)',
        'spiritual-gradient': 'linear-gradient(135deg, #ec4899 0%, #a855f7 25%, #6366f1 50%, #a855f7 75%, #ec4899 100%)',
        'chakra-gradient': 'linear-gradient(135deg, #ef4444 0%, #f97316 25%, #fbbf24 50%, #22c55e 75%, #3b82f6 100%)',
        'aura-gradient': 'linear-gradient(135deg, #22c55e 0%, #14b8a6 25%, #6366f1 50%, #a855f7 75%, #ec4899 100%)',
        'mystical-gradient': 'linear-gradient(135deg, #000000 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #000000 100%)',
      },
    },
  },
  plugins: [],
}
