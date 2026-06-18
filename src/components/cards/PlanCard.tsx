import React, { useState } from 'react';
import { PlanItem } from '@/types';
import { CardShell } from './CardShell';
import { Badge } from '../ui/Badge';
import { useCartStore } from '@/store/useCartStore';

interface PlanCardProps {
  plan: PlanItem;
}

export const PlanCard = ({ plan }: PlanCardProps) => {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const isSelected = cart.some((item) => item.productId === plan.id);

  const togglePlan = () => {
    if (isSelected) {
      updateQuantity(plan.id, 0);
    } else {
      updateQuantity(plan.id, 1);
    }
  };

  return (
    <CardShell
      isSelected={isSelected}
      onClick={togglePlan}
      className="flex flex-col sm:flex-row items-center gap-[19px] sm:p-[16px]"
    >
      {plan.badge && <Badge text={plan.badge} className="absolute top-4 left-4" />}

      <div className="w-16 h-16 flex justify-center items-center flex-shrink-0">
        <img src={plan.image} alt={plan.name} loading="lazy" className="w-full h-full object-contain" />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-[15px]">

        <div className="flex flex-col gap-[8px]">
          <h3 className="font-medium text-[18px] leading-none tracking-[0.6px] text-neutral-text">
            {plan.name}
          </h3>
          <p className="font-medium text-[14px] tracking-[0.6px] leading-[130%] text-neutral-text/75">
            {plan.description}
          </p>
        </div>

        <div className="flex sm:flex-col justify-between sm:justify-end items-center sm:items-end w-full sm:w-auto gap-[3px] font-normal text-right text-[16px] tracking-[0.6px] leading-none">
          {plan.originalPrice && (
            <div className="text-status-error line-through opacity-80 mb-0.5">
              ${plan.originalPrice}
              <span className="text-[12px] opacity-75">/{plan.billingCycle}</span>
            </div>
          )}
          <div className="text-neutral-secondary">
            ${plan.price}
            <span className="text-neutral-text/75 text-[14px]">/{plan.billingCycle}</span>
          </div>
        </div>

      </div>
    </CardShell>
  );
};