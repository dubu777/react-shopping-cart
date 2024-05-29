import { atom, selector } from "recoil";
import { cartItemsState } from "./cart/cartItems";
import { couponsState } from "./coupon/coupons";
import { calculateDiscountAmountOfCoupon } from "../utils/calculateDiscountAmountOfCoupon";
import {
  DELIVERY_COST,
  MINIMUM_AMOUNT_FOR_FREE_DELIVERY,
} from "../constants/servicePolicy";

// 주문 금액
export const orderAmountState = selector({
  key: "orderAmountState",
  get: async ({ get }) => {
    const cartItems = get(cartItemsState);
    const orderAmount = cartItems.reduce(
      (amount, { isSelected, quantity, product }) =>
        isSelected ? amount + quantity * product.price : amount,
      0
    );
    return orderAmount;
  },
});

// 할인 금액
export const discountAmountState = selector({
  key: "discountAmountState",
  get: ({ get }) => {
    const selectedCoupons = get(couponsState).filter(
      ({ isSelected }) => isSelected
    );
    const orderAmount = get(orderAmountState);
    const cartItems = get(cartItemsState).filter(
      ({ isSelected }) => isSelected
    );
    const deliveryCost = get(deliveryCostState);

    return selectedCoupons.reduce(
      (discountAmount, coupon) =>
        discountAmount +
        calculateDiscountAmountOfCoupon(coupon, {
          orderAmount,
          cartItems,
          deliveryCost,
        }),
      0
    );
  },
});

// 도서산간지역 선택 여부
export const isIslandOrMountainRegionState = atom({
  key: "isIslandOrMountainRegionState",
  default: false,
});

// 배송비
export const deliveryCostState = selector({
  key: "deliveryCostState",
  get: async ({ get }) => {
    const orderAmount = get(orderAmountState);
    const isIslandOrMountainRegion = get(isIslandOrMountainRegionState);

    if (orderAmount >= MINIMUM_AMOUNT_FOR_FREE_DELIVERY) {
      return DELIVERY_COST.free;
    }
    if (isIslandOrMountainRegion) {
      return DELIVERY_COST.islandOrMountainRegionState;
    }
    return DELIVERY_COST.regular;
  },
});

// 총 결제 금액
export const totalOrderAmountState = selector({
  key: "totalOrderAmountState",
  get: ({ get }) => {
    const orderAmount = get(orderAmountState);
    const discountAmount = get(discountAmountState);
    const deliveryCost = get(deliveryCostState);
    return orderAmount - discountAmount + deliveryCost;
  },
});
