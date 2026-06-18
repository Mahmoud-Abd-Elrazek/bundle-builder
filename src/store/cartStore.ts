// src/store/cartStore.ts
import { create } from 'zustand';
import { ItemCategory } from '@/types';
import { catalogMap } from '@/data/catalogSelectors';

// 1. تعريف شكل العنصر جوه السلة (بنخزن الحاجات المتغيرة بس)
interface CartItem {
  id: string;
  quantity: number;
  selectedColor?: string;
}

// 2. تعريف واجهة الـ Store (State + Actions + Getters)
interface CartState {
  // الـ State
  cartItems: Record<string, CartItem>;

  // الـ Actions (الأوامر)
  updateItem: (id: string, quantity: number, selectedColor?: string) => void;
  updateColor: (id: string, color: string) => void;

  // الـ Getters (الحسابات)
  getCategoryCount: (category: ItemCategory) => number;
  getCartTotals: () => {
    originalTotal: number; // السعر الأصلي قبل الخصم
    finalTotal: number;    // السعر اللي العميل هيدفعه
    savings: number;       // إجمالي التوفير (مكسب العميل)
    isFreeShipping: boolean;
  };
}

// 3. بناء الـ Store
export const useCartStore = create<CartState>((set, get) => ({
  // الحالة الابتدائية: سلة فاضية
  cartItems: {},

  // ==============================
  // Actions
  // ==============================
  
  // دالة ذكية: بتضيف، وتعدل، وتحذف (لو الكمية بقت 0)
  updateItem: (id, quantity, selectedColor) => {
    set((state) => {
      const newItems = { ...state.cartItems };

      if (quantity <= 0) {
        // لو الكمية صفر، امسح المنتج من السلة تماماً
        delete newItems[id];
      } else {
        // لو المنتج موجود حدث كميته، لو مش موجود ضيفه
        newItems[id] = {
          id,
          quantity,
          // احتفظ باللون القديم لو موجود، أو استخدم اللون الجديد
          selectedColor: selectedColor || state.cartItems[id]?.selectedColor,
        };
      }

      return { cartItems: newItems };
    });
  },

  // دالة لتغيير اللون فقط (من غير ما نأثر على الكمية)
  updateColor: (id, color) => {
    set((state) => {
      if (!state.cartItems[id]) return state; // لو المنتج مش في السلة، متعملش حاجة
      
      return {
        cartItems: {
          ...state.cartItems,
          [id]: { ...state.cartItems[id], selectedColor: color },
        },
      };
    });
  },

  // ==============================
  // Getters (Business Logic)
  // ==============================

  // حساب عدد "المنتجات المختلفة" في قسم معين (عشان الـ Accordion)
  getCategoryCount: (category) => {
    const { cartItems } = get();
    // بنلف على عناصر السلة، ونستخدم الـ catalogMap السريع عشان نعرف قسم كل منتج
    return Object.values(cartItems).filter(
      (item) => catalogMap[item.id]?.category === category
    ).length;
  },

  // حساب الفاتورة (زي ما موجودة في الـ Review Panel)
  getCartTotals: () => {
    const { cartItems } = get();
    
    let originalTotal = 0;
    let finalTotal = 0;

    // بنحسب إجمالي المنتجات
    Object.values(cartItems).forEach((cartItem) => {
      const product = catalogMap[cartItem.id];
      if (!product) return;

      // لو المنتج عليه خصم، هنجمع سعره الأصلي، ولو معلهوش هنجمع سعره العادي
      const itemOriginalPrice = product.originalPrice || product.price;
      
      originalTotal += itemOriginalPrice * cartItem.quantity;
      finalTotal += product.price * cartItem.quantity;
    });

    // تطبيق قاعدة الـ Business: الشحن السريع
    // (هنفترض إنه بـ 5.99، وهيبقى مجاني لو العميل اختار أي منتج في السلة)
    const SHIPPING_COST = 5.99;
    const isFreeShipping = finalTotal > 0;

    if (!isFreeShipping && finalTotal > 0) {
       finalTotal += SHIPPING_COST;
       originalTotal += SHIPPING_COST;
    } else if (isFreeShipping) {
       originalTotal += SHIPPING_COST; // بنضيفه للسعر الأصلي عشان نبين للعميل إنه وفر تمنه
    }

    // حساب التوفير
    const savings = originalTotal - finalTotal;

    return {
      originalTotal: parseFloat(originalTotal.toFixed(2)),
      finalTotal: parseFloat(finalTotal.toFixed(2)),
      savings: parseFloat(savings.toFixed(2)),
      isFreeShipping,
    };
  },
}));