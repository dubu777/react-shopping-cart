import { numbers } from "../constants/number";
import { Coupon } from "../types/Coupon";

function useDiscountCalculator() {
  const calculateFixedDisCount = (coupon: Coupon) => {
    return coupon.discount ?? 0;
  };

  const calculatePercentageDisCount = (coupon: Coupon, totalAmount: number) => {
    console.log(totalAmount, 'discount in totalamount');
    
    return Math.floor((totalAmount * (coupon.discount ?? 0)) / 100);
  };

  const calculatefreeShippingDisCount = () => {
    return numbers.SHIPPING_FEE;
  };

  const calculateDiscountAmount = (coupon: Coupon, totalAmount: number) => {
    switch (coupon.discountType) {
      case "fixed":
        return calculateFixedDisCount(coupon);
      case "percentage":
        return calculatePercentageDisCount(coupon, totalAmount);
      case "freeShipping":
        return calculatefreeShippingDisCount();
      default:
        return 0;
    }
  };

  return { calculateDiscountAmount };
}

export default useDiscountCalculator;
