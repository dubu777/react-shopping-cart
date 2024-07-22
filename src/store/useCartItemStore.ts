import { create } from "zustand";
import { Items } from "../types/Item";

interface CartItenStoreState {
  cartItems: Items[] | null,
  setCartItems: (cartItems: Items[] | null) => void;
}

const useCartItenStore = create<CartItenStoreState>(set => ({
  cartItems: null,
  setCartItems: (cartItems: Items[] | null) => {
    set({cartItems})
  },
  
}))


export default useCartItenStore;