import React from 'react';

interface QuantityControllerProps {
   value: number;
   onChange: (newValue: number) => void;
   min?: number;
}

export const QuantityController = ({ value, onChange, min = 0 }: QuantityControllerProps) => {
   const showBackground = value > min;

   const buttonBaseClass = "w-[20px] h-[20px] rounded-[4px] text-neutral-muted hover:bg-brand-light transition-colors flex items-center justify-center";
   return (
      <div className="flex items-center gap-[10px] min-h-[35px] bg-white py-[4px] ">
         <button
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            className={`${buttonBaseClass} disabled:opacity-50 disabled:cursor-not-allowed ${showBackground ? 'bg-brand-light' : 'border-[2px] border-neutral-borderLight'
               }`}
         >
            -
         </button>

         <span className="font-medium text-brand-dark text-[16px] leading-[20px]">
            {value}
         </span>

         <button
            onClick={() => onChange(value + 1)}
            className={`${buttonBaseClass} bg-brand-light`}
         >
            +
         </button>
      </div>
   );
};