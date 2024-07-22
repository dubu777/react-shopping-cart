import { create } from "zustand";
import { Items } from "../types/Item";

interface CartItenStoreState {
  cartItems: Items[] | null,
  setCartItems: (cartItems: Items[] | null) => void;
}

const useCartItenStore = create<CartItenStoreState>(set => ({
  cartItems: null,
  setCartItems: (cartItems: Items[] | null) => {
    const cartItemsWithSelection = cartItems?.map((item) => ({
      ...item,
      isSelected: true,
    }))
    set({cartItems: cartItemsWithSelection })
  },
  toggleItemSelection: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems?.map((item) => 
        item.id === id ? {...item,  isSelected: !item.isSelected} : item,
      )
    }))
  }
}))


export default useCartItenStore;