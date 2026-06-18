import React, { useState } from 'react';
import { SensorItem } from '@/types';
import { BaseItemCard } from './BaseItemCard';
import { QuantityController } from '../ui/QuantityController';

export const SensorCard = ({ sensor }: { sensor: SensorItem }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <BaseItemCard
      name={sensor.name}
      description={sensor.description}
      image={sensor.image}
      price={sensor.price}
      originalPrice={sensor.originalPrice}
      isRequired={sensor.isRequired}
      isSelected={quantity > 0}
      QuantityControlSlot={
        <QuantityController value={quantity} onChange={setQuantity} />
      }
    />
  );
};