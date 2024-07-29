const queryKey = {
  CART: 'cart',
  GET_CART_ITEM: 'getCartItems',
  COUPON: 'coupon',
  GET_COUPON: 'getCoupon',
} as const 

const localStorageKey = {
  SELECTED_ITEMS: 'selectedItmes'
} as const

export {queryKey, localStorageKey}