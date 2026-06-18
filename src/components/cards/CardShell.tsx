import React from 'react';

interface CardShellProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick?: () => void;
  className?: string;
}

export const CardShell = ({ children, isSelected, onClick, className }: CardShellProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-[10px] p-[11px] border-[2px] border-transparent bg-white transition-all duration-100 ${className} ${onClick ? 'cursor-pointer' : ''
        } ${isSelected
          ? ' border-brand/70'
          : ''
        }`}
    >
      {children}
    </div>
  );
};