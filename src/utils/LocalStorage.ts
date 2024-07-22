import { LocalShoppingCartType } from "../types/localStorage";

const getLocalStorage = (): LocalShoppingCartType[] => {
  const cartsState = JSON.parse(localStorage.get("shopping-cart") ?? "[]");

  return cartsState;
};

export interface Product {
  name: string;
  price: number;
}

const updateLocalStorage = (products: Product[]): Product[] => {
  const filteredProducts = products.filter(product => product.price <= 2000);
  localStorage.setItem('shopping-cart', JSON.stringify(filteredProducts));
  return filteredProducts;
};

export { getLocalStorage, updateLocalStorage };
