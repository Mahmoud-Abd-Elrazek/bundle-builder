import React, { useState } from 'react';
import { AccessoryItem } from '@/types';
import { BaseItemCard } from './BaseItemCard';
import { QuantityController } from '../ui/QuantityController';
import { ColorSelector } from '../ui/ColorSelector';
import { useCartStore } from '@/store/useCartStore';

export const AccessoryCard = ({ accessory }: { accessory: AccessoryItem }) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    accessory.colors && accessory.colors.length > 0 ? accessory.colors[0].name : undefined
  );

  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const currentCartItem = cart.find(
    (item) => item.productId === accessory.id && item.selectedColor === selectedColor
  );

  const currentQuantity = currentCartItem ? currentCartItem.quantity : 0;
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(accessory.id, newQuantity, selectedColor);
  };

  return (
    <BaseItemCard
      name={accessory.name}
      description={accessory.description}
      image={accessory.image}
      price={accessory.price}
      originalPrice={accessory.originalPrice}
      badge={accessory.badge}
      isSelected={currentQuantity > 0}

      QuantityControlSlot={
        <QuantityController
          value={currentQuantity}
          onChange={handleQuantityChange}
        />
      }

      ColorsSlot={
        accessory.colors && accessory.colors.length > 0 ? (
          <ColorSelector
            colors={accessory.colors}
            selectedColor={selectedColor || ''}
            onChange={setSelectedColor}
          />
        ) : undefined
      }
    />
  );
};