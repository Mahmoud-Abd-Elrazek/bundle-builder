export interface ColorOption {
   name: string;
   hex: string;
   imageUrl: string
}

export interface Product {
   id: string;
   name: string;
   description?: string;
   image: string;
   price: number;
   originalPrice?: number;
   badge?: string;
   colors?: ColorOption[]
}

export interface CartItem extends Product {
   quantity: number;
   selectedColor?: string;
}