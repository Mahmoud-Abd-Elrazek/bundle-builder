import React, { useState } from 'react';
import { CameraItem } from '@/types';
import { BaseItemCard } from './BaseItemCard';
import { QuantityController } from '../ui/QuantityController';
import { ColorSelector } from '../ui/ColorSelector';

export const CameraCard = ({ camera }: { camera: CameraItem }) => {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    camera.colors && camera.colors.length > 0 ? camera.colors[0].name : ''
  );

  return (
    <BaseItemCard
      name={camera.name}
      badge={camera.badge}
      image={camera.image}
      price={camera.price}
      originalPrice={camera.originalPrice}
      isSelected={quantity > 0}

      description={
        <>
          {camera.description}
          {' '}
          <a href="#" className="font-medium text-status-link underline">Learn More</a>
        </>
      }

      QuantityControlSlot={
        <QuantityController value={quantity} onChange={setQuantity} />
      }

      ColorsSlot={
        camera.colors && camera.colors.length > 0 ? (
          <ColorSelector
            colors={camera.colors}
            selectedColor={selectedColor}
            onChange={setSelectedColor}
          />
        ) : undefined
      }
    />
  );
};