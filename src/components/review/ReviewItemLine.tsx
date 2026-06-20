import React from 'react';
import { QuantityController } from '../ui/QuantityController';

interface ReviewItemLineProps {
   name: string;
   image: string;
   price: number;
   originalPrice?: number;
   quantity: number;
   selectedColor?: string;
   hideStepper?: boolean;
   billingCycle?: string;

   onUpdateQuantity?: (newQuantity: number) => void;
}

export const ReviewItemLine = ({
   name,
   image,
   price,
   originalPrice,
   quantity,
   selectedColor,
   hideStepper = false,
   billingCycle,
   onUpdateQuantity
}: ReviewItemLineProps) => {
   const multiplier = hideStepper ? 1 : quantity;
   const linePrice = (price * multiplier).toFixed(2);
   const lineOriginalPrice = originalPrice ? (originalPrice * multiplier).toFixed(2) : undefined;

   return (
      <div className="flex items-center justify-between gap-[16px]">

         <div className='flex items-center justify-between flex-1 gap-[12px]'>
            <div className="w-[41px] h-[41px] flex-shrink-0 flex items-center justify-center rounded-[5px] bg-white">
               <img src={image} alt={name} className="w-full h-full object-contain" />
            </div>

            <p className="font-medium text-[14px] text-[#0B0D10] leading-tight flex-1">
               {name}
            </p>

            {!hideStepper && onUpdateQuantity && (
               <div className="flex-shrink-0">
                  <QuantityController
                     value={quantity}
                     onChange={onUpdateQuantity}
                     bgBtn='white'
                  />
               </div>
            )}
         </div>

         <div>
            {lineOriginalPrice && (
               <div className="text-[14px] font-medium leading-[16px] tracking-[0.5%] line-through text-[#6F7882]">
                  ${lineOriginalPrice}{billingCycle ? `/${billingCycle}` : ''}
               </div>
            )}
            <div className="text-[14px] font-semibold leading-[16px] tracking-[0.5%] text-[#4E2FD2]">
               ${linePrice}{billingCycle ? `/${billingCycle}` : ''}
            </div>
         </div>

      </div>
   );
};