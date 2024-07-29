import { create } from "zustand";
import { Items } from "../types/Item";

interface CartItenStoreState {
  cartItems: Items[];
  setCartItems: (cartItems: Items[]) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  toggleICartItem: (id: number) => void;
  toggleIAllCartItem: () => void;
  deleteSelectedCartItem: () => void;
  deleteCartItem: (id: number) => void;
  selectedItems: Items[];
}

const useCartItemStore = create<CartItenStoreState>((set, get) => ({
  cartItems: [],
  selectedItems: [],
  setCartItems: (cartItems: Items[]) => {
    const cartItemsWithSelection = cartItems?.map((item) => ({
      ...item,
      isSelected: true,
    }));
    set({
      cartItems: cartItemsWithSelection,
      selectedItems: cartItemsWithSelection,
    });
  },
  // 장바구니 상품 삭제 백엔드 코드 구현후 완성하기
  deleteSelectedCartItem: () => {
    set((state) => ({
      cartItems: state.cartItems,
      selectedItems: [],
    }));
  },
  // 장바구니 상품 삭제 백엔드 코드 구현후 완성하기
  deleteCartItem: (id: number) => {
    set((state) => {
      const updatedCartItems = state.cartItems?.filter((item) => item.id !== id);
      const updatedSelectedItems = updatedCartItems?.filter(item => item.isSelected);
      return {
        cartItems: updatedCartItems,
        selectedItems: updatedSelectedItems
      };
    });
  },
  // 수량 +
  increaseQuantity: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems?.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },
  // 수량 -
  decreaseQuantity: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems?.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    }));
  },
  // 상품 선택
  toggleICartItem: (id: number) => {
    set((state) => {
      const updatedCartItems = state.cartItems?.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
      const updatedSelectedItems = updatedCartItems?.filter(
        (item) => item.isSelected
      );
      return {
        cartItems: updatedCartItems,
        selectedItems: updatedSelectedItems,
      };
    });
  },
  // 상품 전체 선택
  toggleIAllCartItem() {
    set((state) => {
      const allSelected = state.cartItems?.every((item) => item.isSelected);
      const newValues = state.cartItems?.map((item) => ({
        ...item,
        isSelected: !allSelected,
      }));
      const updatedSelectedItems = newValues?.filter(item => item.isSelected);
      return { 
        cartItems: newValues,
        selectedItems: updatedSelectedItems
      };
    });
  },
}));

export default useCartItemStore;
