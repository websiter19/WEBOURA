import React from 'react';

interface WebouraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const WebouraLogo: React.FC<WebouraLogoProps> = ({ 
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-lg tracking-[0.14em]',
    md: 'text-xl sm:text-2xl tracking-[0.16em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.18em]'
  };

  return (
    <span className={`font-black uppercase text-[#121110] select-none ${sizeClasses[size]} ${className}`}>
      WEBOURA
    </span>
  );
};
