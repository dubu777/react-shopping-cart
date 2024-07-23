import { numbers } from "../constants/number";
import { Coupon } from "../types/Coupon";
import { Items } from "../types/Item";
import useDiscountCalculator from "./useDiscountCalculator";

// 훅에 파라미터로 isSelected된 아이템과 isChecked 된 쿠폰을 보내줘야함
function useOrderCalculator(orderItems: Items[], selectCoupons: Coupon[]) {
  const { calculateDiscountAmount } = useDiscountCalculator();

  const calculateTotalAmount = () => {
    return orderItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const calculateTotalDiscount = () => {
    const totalAmount = calculateTotalAmount();
    const totalDiscount = selectCoupons.reduce(
      (total, coupon) => total + calculateDiscountAmount(coupon, totalAmount),
      0
    );

    return totalDiscount;
  };

  const calculateShippingFee = () => {
    return numbers.SHIPPING_FEE;
  };

  const calculateFinalAmount = () => {
    const totalAmount = calculateTotalAmount();
    const totalDiscount = calculateTotalDiscount();
    const shippingFee = calculateShippingFee();

    const finalAmount = totalAmount + shippingFee - totalDiscount;
    return finalAmount < 0 ? 0 : finalAmount;
  };

  return {
    calculateFinalAmount,
    calculateShippingFee,
    calculateTotalAmount,
    calculateTotalDiscount,
  };
}

export { useOrderCalculator };
