import { API_PATH } from "../constants/apiPath";
import { RawCartItem } from "../types/cartItems";
import { cartApiClient } from "./cartApiClient";

export const fetchCartItems = async (): Promise<RawCartItem[]> => {
  const res = await cartApiClient.get<{ content: RawCartItem[] }>(API_PATH.cartItems);
  return res.data.content;
};

export const createCartItem = async (productId: number): Promise<void> => {
  await cartApiClient.post<void>(API_PATH.cartItems, { productId });
};

export const updateCartItemQuantity = async (
  cartItemId: number,
  quantity: number
): Promise<void> => {
  await cartApiClient.patch<void>(`${API_PATH.cartItems}/${cartItemId}`, { quantity });
};

export const removeCartItem = async (cartItemId: number): Promise<void> => {
  await cartApiClient.delete<void>(`${API_PATH.cartItems}/${cartItemId}`);
};
