import type { CartItem, ResponseCartItem } from '../../types/cartItem.type';
import { ResponseCartItemList } from '../../types/cartItemList.type';
import { requestDelete, requestGet, requestPatch, requestPost } from '../fetcher';
import { BASE_URL_LIST } from '../baseUrlList';
import { CART_ITEM } from '../endpointList';

const preprocessCartItemList = (arr: ResponseCartItem[]): CartItem[] => {
  return arr.map(({ id, quantity, product }) => ({
    quantity,
    product: product,
    cartItemId: id,
  }));
};

export const requestCartItemList = async (): Promise<CartItem[]> => {
  const data = await requestGet<ResponseCartItemList>({
    baseUrl: BASE_URL_LIST.CART,
    endpoint: CART_ITEM.CART_ITEM_LIST,
  });

  return preprocessCartItemList(data.content);
};

export const requestSetCartItemQuantity = async (cartItemId: number, quantity: number) => {
  await requestPatch({
    baseUrl: BASE_URL_LIST.CART,
    endpoint: CART_ITEM.cartItem(cartItemId),
    body: { quantity },
  });
};

export const requestDeleteCartItem = async (cartItemId: number) => {
  await requestDelete({
    baseUrl: BASE_URL_LIST.CART,
    endpoint: CART_ITEM.cartItem(cartItemId),
    body: { id: cartItemId },
  });
};

export const requestAddCartItem = async ({ productId, quantity }: { productId: number; quantity: number }) => {
  await requestPost({
    baseUrl: BASE_URL_LIST.CART,
    endpoint: CART_ITEM.CART_ITEM_LIST,
    body: { productId, quantity },
  });
};