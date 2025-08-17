import React from 'react';

interface LotusLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export default function LotusLogo({ size = 'md', className = '', showText = true }: LotusLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Lotus Flower Logo */}
      <div className={`relative ${sizeClasses[size]} group`}>
        {/* Main Lotus Petals */}
        <div className="absolute inset-0 animate-spin-slow">
          {/* Green petal (top) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-b from-spiritual-green-400 to-spiritual-green-600 rounded-t-full origin-bottom"></div>
          
          {/* Red petal (top-right) */}
          <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-br from-spiritual-red-400 to-spiritual-red-600 rounded-tr-full origin-bottom-left transform rotate-45"></div>
          
          {/* Orange petal (right) */}
          <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-br from-spiritual-orange-400 to-spiritual-orange-600 rounded-br-full origin-top-left transform rotate-90"></div>
          
          {/* Light blue petal (bottom-right) */}
          <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-spiritual-blue-300 to-spiritual-blue-500 rounded-br-full origin-top-left transform rotate-135"></div>
          
          {/* Brown petal (bottom) */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-t from-spiritual-brown-400 to-spiritual-brown-600 rounded-b-full origin-top"></div>
          
          {/* Additional petals for fullness */}
          <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-spiritual-purple-400 to-spiritual-purple-600 rounded-bl-full origin-top-right transform -rotate-45"></div>
          
          <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-tl from-spiritual-teal-400 to-spiritual-teal-600 rounded-bl-full origin-top-right transform -rotate-90"></div>
          
          <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-bl from-spiritual-magenta-400 to-spiritual-magenta-600 rounded-tl-full origin-bottom-right transform -rotate-135"></div>
        </div>

        {/* Center of the lotus */}
        <div className="absolute inset-1/4 bg-gradient-to-br from-spiritual-gold-400 to-spiritual-gold-600 rounded-full shadow-lg"></div>
        
        {/* Small red element at bottom */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-spiritual-red-500 rounded-full shadow-md"></div>

        {/* Sparkle effects */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-spiritual-gold-300 rounded-full animate-sparkle opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-spiritual-silver-300 rounded-full animate-sparkle opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-spiritual-gold-200 rounded-full animate-sparkle opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`font-luxury font-bold text-diamond-black ${textSizes[size]} leading-tight`}>
            BHARTIYA VASTRA
          </h1>
          <p className="text-xs text-diamond-slate font-medium">Traditional Indian Attire</p>
        </div>
      )}
    </div>
  );
}
