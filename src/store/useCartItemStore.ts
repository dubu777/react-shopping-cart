import { create } from "zustand";
import { Items } from "../types/Item";

interface CartItenStoreState {
  cartItems: Items[] | null;
  setCartItems: (cartItems: Items[] | null) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  toggleICartItem: (id: number) => void;
  toggleIAllCartItem: () => void;
  deleteSelectedCartItem: () => void;
  deleteCartItem: (id: number) => void;
}

const useCartItemStore = create<CartItenStoreState>((set) => ({
  cartItems: null,
  setCartItems: (cartItems: Items[] | null) => {
    const cartItemsWithSelection = cartItems?.map((item) => ({
      ...item,
      isSelected: true,
    }));
    set({ cartItems: cartItemsWithSelection });
  },
  // 장바구니 상품 삭제 백엔드 코드 구현후 완성하기
  deleteSelectedCartItem: () => {
    set((state) => ({
      cartItems: state.cartItems,
    }));
  },
  // 장바구니 상품 삭제 백엔드 코드 구현후 완성하기
  deleteCartItem: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems,
    }));
  },
  increaseQuantity: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems?.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },
  decreaseQuantity: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems?.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    }));
  },
  toggleICartItem: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems?.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      ),
    }));
  },
  toggleIAllCartItem() {
    set((state) => {
      const allSelected = state.cartItems?.every((item) => item.isSelected);
      const newValues = state.cartItems?.map((item) => ({
        ...item,
        isSelected: !allSelected,
      }));
      return { cartItems: newValues };
    });
  },
}));

export default useCartItemStore;
