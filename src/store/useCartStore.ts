import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types';
import { INITIAL_CART } from '@/data/initialBundle';

interface CartState {
   cart: CartItem[];
   updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
}

export const useCartStore = create<CartState>()(
   persist(
      (set) => ({
         cart: INITIAL_CART,

         updateQuantity: (productId, quantity, selectedColor) => {
            set((state) => {
               if (quantity <= 0) {
                  return {
                     cart: state.cart.filter(
                        (item) => !(item.productId === productId && item.selectedColor === selectedColor)
                     ),
                  };
               }

               const existingItemIndex = state.cart.findIndex(
                  (item) => item.productId === productId && item.selectedColor === selectedColor
               );

               if (existingItemIndex >= 0) {
                  const updatedCart = [...state.cart];
                  updatedCart[existingItemIndex] = {
                     ...updatedCart[existingItemIndex],
                     quantity,
                  };
                  return { cart: updatedCart };
               } else {
                  return {
                     cart: [...state.cart, { productId, quantity, selectedColor }],
                  };
               }
            });
         },
      }),
      {
         name: 'security-system-storage',
      }
   )
);