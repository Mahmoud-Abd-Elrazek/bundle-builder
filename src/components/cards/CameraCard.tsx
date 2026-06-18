import React, { useState } from 'react';
import { CameraItem } from '@/types';
import { BaseItemCard } from './BaseItemCard';
import { QuantityController } from '../ui/QuantityController';
import { ColorSelector } from '../ui/ColorSelector';
import { useCartStore } from '@/store/useCartStore';

export const CameraCard = ({ camera }: { camera: CameraItem }) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    camera.colors && camera.colors.length > 0 ? camera.colors[0].name : undefined
  );

  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const currentCartItem = cart.find(
    (item) => item.productId === camera.id && item.selectedColor === selectedColor
  );
  const currentQuantity = currentCartItem ? currentCartItem.quantity : 0;

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(camera.id, newQuantity, selectedColor);
  };

  return (
    <BaseItemCard
      name={camera.name}
      badge={camera.badge}
      image={camera.image}
      price={camera.price}
      originalPrice={camera.originalPrice}
      isSelected={currentQuantity > 0}

      description={
        <>
          {camera.description}
          {' '}
          <a href="#" className="font-medium text-brand hover:underline">Learn More</a>
        </>
      }

      QuantityControlSlot={
        <QuantityController
          value={currentQuantity}
          onChange={handleQuantityChange}
        />
      }

      ColorsSlot={
        camera.colors && camera.colors.length > 0 ? (
          <ColorSelector
            colors={camera.colors}
            selectedColor={selectedColor || ''}
            onChange={setSelectedColor}
          />
        ) : undefined
      }
    />
  );
};