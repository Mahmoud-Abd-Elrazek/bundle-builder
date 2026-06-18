// src/components/cards/AccessoryCard.tsx
import React, { useState } from 'react';
import { AccessoryItem } from '@/types';
import { BaseItemCard } from './BaseItemCard';
import { QuantityController } from '../ui/QuantityController';

interface AccessoryCardProps {
  accessory: AccessoryItem;
}

export const AccessoryCard = ({ accessory }: AccessoryCardProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <BaseItemCard
      name={accessory.name}
      description={accessory.description}
      image={accessory.image}
      price={accessory.price}
      originalPrice={accessory.originalPrice}
      badge={accessory.badge} 
      isSelected={quantity > 0}
      QuantityControlSlot={
        <QuantityController value={quantity} onChange={setQuantity} />
      }
    />
  );
};