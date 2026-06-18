import React, { useState } from 'react';
import { SensorItem } from '@/types';
import { BaseItemCard } from './BaseItemCard';
import { QuantityController } from '../ui/QuantityController';
import { ColorSelector } from '../ui/ColorSelector';
import { useCartStore } from '@/store/useCartStore';

export const SensorCard = ({ sensor }: { sensor: SensorItem }) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    sensor.colors && sensor.colors.length > 0 ? sensor.colors[0].name : undefined
  );

  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const currentCartItem = cart.find(
    (item) => item.productId === sensor.id && item.selectedColor === selectedColor
  );
  const currentQuantity = currentCartItem ? currentCartItem.quantity : 0;

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(sensor.id, newQuantity, selectedColor);
  };

  return (
    <BaseItemCard
      name={sensor.name}
      description={sensor.description}
      image={sensor.image}
      price={sensor.price}
      originalPrice={sensor.originalPrice}
      isRequired={sensor.isRequired}
      isSelected={currentQuantity > 0}

      QuantityControlSlot={
        <QuantityController
          value={currentQuantity}
          onChange={handleQuantityChange}
        />
      }

      ColorsSlot={
        sensor.colors && sensor.colors.length > 0 ? (
          <ColorSelector
            colors={sensor.colors}
            selectedColor={selectedColor || ''}
            onChange={setSelectedColor}
          />
        ) : undefined
      }
    />
  );
};