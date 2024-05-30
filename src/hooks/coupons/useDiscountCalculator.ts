// 쿠폰별 할인 금액 계산하는 커스텀 훅
import { useRecoilValue } from "recoil";
import { cartItemsState } from "@/stores/cartItems";
import { selectedCouponsState } from "@/stores/coupons";
import { cartPriceState, shippingAreaState } from "@/stores/cartPrice";
import { selectedCartItemsState } from "@/stores/cartItemSelections";

import getPermutations from "@/utils/getPermutations";
import { CART_PRICE } from "@/constants/cart";
import { COUPON_SELECTION_RULES } from "@/constants/coupon";
import { Coupon } from "@/types/coupon";

const useDiscountCalculator = () => {
  const cartItems = useRecoilValue(cartItemsState);
  const shippingArea = useRecoilValue(shippingAreaState);
  const selectedCoupons = useRecoilValue(selectedCouponsState);
  const selectedCartItems = useRecoilValue(selectedCartItemsState);
  const { orderPrice } = useRecoilValue(cartPriceState);

  const calculateFixedDiscount = (discount: number) => {
    return discount;
  };

  const calculatePercentageDiscount = (
    discount: number,
    currentDiscountedAmount: number
  ) => {
    return (orderPrice - currentDiscountedAmount) * (discount / 100);
  };

  const calculateBuyXgetYDiscount = () => {
    const filteredItemsByQuantity = cartItems.filter(
      (cartItem) =>
        selectedCartItems.findIndex(
          (selectedItem) => selectedItem.id === cartItem.id
        ) !== -1 && cartItem.quantity >= COUPON_SELECTION_RULES.minXgetYCount
    );

    if (filteredItemsByQuantity.length === 0) {
      return 0;
    }

    const maxUnitPrice = Math.max(
      ...filteredItemsByQuantity.map((cartItem) => cartItem.product.price)
    );

    return maxUnitPrice;
  };

  const calculateFreeShippingDiscount = () => {
    return CART_PRICE.shippingFees[shippingArea];
  };

  const calculateDiscountPrice = (
    coupon: Coupon,
    currentDiscountedAmount: number = 0
  ) => {
    const { discountType, discount } = coupon;

    if (!discount && !discountType) {
      return 0;
    }

    switch (discountType) {
      case "fixed":
        return calculateFixedDiscount(discount as number);
      case "percentage":
        return calculatePercentageDiscount(
          discount as number,
          currentDiscountedAmount
        );
      case "buyXgetY":
        return calculateBuyXgetYDiscount();
      case "freeShipping":
        return calculateFreeShippingDiscount();
      default:
        return 0;
    }
  };

  const calculateTotalDiscount = () => {
    if (selectedCoupons.length === 0) {
      return 0;
    }

    const permutations = getPermutations(selectedCoupons);

    const discountAmounts = permutations.map((couponsPermutation) => {
      return couponsPermutation.reduce((totalDiscount, coupon) => {
        const discountAmount = calculateDiscountPrice(coupon, totalDiscount);
        return totalDiscount + discountAmount;
      }, 0);
    });

    const maxDiscountPrice = Math.max(...discountAmounts);
    return maxDiscountPrice;
  };

  return {
    totalDiscountPrice: calculateTotalDiscount(),
    calculateDiscountPrice,
    calculateTotalDiscount,
  };
};

export default useDiscountCalculator;
