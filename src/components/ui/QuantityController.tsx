import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantityControllerProps {
   value: number;
   onChange: (newValue: number) => void;
   min?: number;
   max?: number
}

export const QuantityController = ({ value, onChange, min = 0, max = 99 }: QuantityControllerProps) => {
   const showBackground = value > min;

   const iconSize = 14;
   const buttonBaseClass = "w-[20px] h-[20px] rounded-[4px] text-neutral-muted hover:bg-brand-light transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";
   return (
      <div className="flex items-center justify-between min-h-[35px] min-w-[80px] bg-white py-[4px] ">
         <button
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            className={`${buttonBaseClass} ${showBackground ? 'bg-brand-light' : 'border-[2px] border-neutral-borderLight'
               }`}
         >
            <Minus size={iconSize} strokeWidth={3} />
         </button>

         <span className="font-medium text-brand-dark text-[16px] leading-[20px] w-[24px] text-center">
            {value}
         </span>

         <button
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            className={`${buttonBaseClass} ${value < max ? 'bg-brand-light' : 'border-[2px] border-neutral-borderLight'}`}
         >
            <Plus size={iconSize} strokeWidth={3} />
         </button>
      </div>
   );
};