import React from 'react';
import { ColorOption } from '@/types';

interface ColorSelectorProps {
   colors: ColorOption[];
   selectedColor: string;
   onChange: (colorName: string) => void;
}

export const ColorSelector = ({ colors, selectedColor, onChange }: ColorSelectorProps) => {
   if (!colors || colors.length === 0) return null;

   return (
      <div className="flex flex-wrap gap-2">
         {colors.map((color) => {
            const isSelected = selectedColor === color.name;

            return (
               <button
                  key={color.name}
                  onClick={() => onChange(color.name)}
                  className={`flex items-center justify-center border-[0.5px] px-[3px] py-[1px] rounded-[2px] text-neutral-text text-[10px] font-medium min-w-[65px] transition-all duration-200 ${isSelected
                     ? 'border-status-success bg-status-successLight'
                     : 'border-neutral-border hover:border-neutral-text'
                     }`}
               >
                  {color.imageUrl ? (
                     <img
                        src={color.imageUrl}
                        alt={`${color.name} icon`}
                        className="w-[28px] h-[28px] object-contain flex-shrink-0"
                     />
                  ) : (
                     <span
                        className="w-3 h-3 rounded-full border border-neutral-border shadow-sm flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                     />
                  )}
                  <span className='flex-1'>
                     {color.name}
                  </span>
               </button>
            );
         })}
      </div>
   );
};