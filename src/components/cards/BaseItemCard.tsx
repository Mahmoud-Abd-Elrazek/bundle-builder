import React from 'react';
import { CardShell } from './CardShell';
import { Badge } from '../ui/Badge';

interface BaseItemCardProps {
  name: string;

  description?: React.ReactNode;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  isRequired?: boolean;
  isSelected: boolean;

  QuantityControlSlot: React.ReactNode;
  ColorsSlot?: React.ReactNode;
  PricingSuffixSlot?: React.ReactNode;
}

export const BaseItemCard = ({
  name,
  description,
  image,
  price,
  originalPrice,
  badge,
  isRequired,
  isSelected,
  QuantityControlSlot,
  ColorsSlot,
  PricingSuffixSlot
}: BaseItemCardProps) => {
  return (
    <CardShell isSelected={isSelected} className="flex flex-col sm:flex-row justify-center items-center gap-[19px]">

      {badge && <Badge text={badge} className="absolute top-4 left-4" />}

      {/* ===== IMAGE =====*/}
      <div className="w-full h-full sm:w-1/3 flex justify-center items-center flex-shrink-0">
        <img src={image} alt={name} loading="lazy" className="w-32 h-32 object-contain" />
      </div>

      {/* ===== DETAILS ===== */}
      <div className="w-full flex-1 sm:w-2/3 flex flex-col justify-between gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-medium text-[18px] leading-none tracking-[0.6px] text-neutral-text">
              {name}
              {isRequired && (
                <span className="text-status-error text-[14px] ml-2 font-normal tracking-normal">
                  (Required)
                </span>
              )}
            </p>

            {description && (
              <p className="font-medium text-[14px] tracking-[0.6px] align-middle leading-[130%] text-neutral-text/75">
                {description}
              </p>
            )}
          </div>

          {ColorsSlot}
        </div>

        {/* QUANTITY AND PRICING*/}
        <div className="flex justify-between items-center mt-2 sm:mt-0">
          {QuantityControlSlot}

          <div className="flex lg:flex-col gap-[3px] font-normal text-right text-[16px] tracking-[0.6px] leading-none">
            {originalPrice && (
              <div className="text-status-error line-through opacity-80 mb-0.5">
                ${originalPrice}{PricingSuffixSlot}
              </div>
            )}
            <div className="text-neutral-secondary">
              ${price}{PricingSuffixSlot}
            </div>
          </div>
        </div>
      </div>

    </CardShell>
  );
};