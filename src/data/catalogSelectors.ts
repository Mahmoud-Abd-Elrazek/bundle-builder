import { catalogData } from './mockDb';
import { ItemCategory, CatalogItem } from '@/types';

export const catalogMap = catalogData.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, CatalogItem>);

const groupedByCategory = catalogData.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {} as Record<ItemCategory, CatalogItem[]>);

export const camerasList = groupedByCategory[ItemCategory.CAMERA] || [];
export const sensorsList = groupedByCategory[ItemCategory.SENSOR] || [];
export const accessoriesList = groupedByCategory[ItemCategory.ACCESSORY] || [];
export const plansList = groupedByCategory[ItemCategory.PLAN] || [];