export enum ItemCategory {
   CAMERA = 'CAMERA',
   SENSOR = 'SENSOR',
   ACCESSORY = 'ACCESSORY',
   PLAN = 'PLAN',
}

export interface ColorOption {
   name: string;
   hex: string;
   imageUrl: string
}

interface BaseItem {
   id: string;
   name: string;
   description?: string;
   image: string;
   price: number;
   originalPrice?: number;
}

export interface CameraItem extends BaseItem {
   category: ItemCategory.CAMERA;
   badge?: string;
   colors?: ColorOption[];
}

export interface SensorItem extends BaseItem {
   category: ItemCategory.SENSOR;
   isRequired?: boolean;
}

export interface AccessoryItem extends BaseItem {
   badge?: string | undefined;
   category: ItemCategory.ACCESSORY;
}

export interface PlanItem extends BaseItem {
   category: ItemCategory.PLAN;
   badge?: string | undefined;
   billingCycle: 'mo' | 'yr';
}

export type CatalogItem = CameraItem | SensorItem | AccessoryItem | PlanItem;

export interface CartItem {
   productId: string;
   quantity: number;
   selectedColor?: string;
}