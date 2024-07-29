import { numbers } from "../constants/number";
import { Coupon } from "../types/Coupon";
import { Items } from "../types/Item";
import useDiscountCalculator from "./useDiscountCalculator";

// 훅에 파라미터로 isSelected된 아이템과 isSelected 된 쿠폰을 보내줘야함
function useOrderCalculator(selectedItems: Items[], selectCoupons: Coupon[]) {
  const { calculateDiscountAmount } = useDiscountCalculator();

  // 주문 금액
  const calculateTotalAmount = () => {
    return selectedItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // 쿠폰 할인 금액
  const calculateTotalDiscount = () => {
    const totalAmount = calculateTotalAmount();
    const totalDiscount = selectCoupons.reduce(
      (total, coupon) => total + calculateDiscountAmount(coupon, totalAmount),
      0
    );
    

    return totalDiscount;
  };

  // 배송비
  const calculateShippingFee = () => {
    const totalAmount = calculateTotalAmount();
    
    return totalAmount >= 50000 ? 0 : numbers.SHIPPING_FEE;
  };

  // 할인을 적용한 최종 결제 금액
  const calculateFinalAmountWithDiscount = () => {
    const totalAmount = calculateTotalAmount();
    const totalDiscount = calculateTotalDiscount();
    const shippingFee = calculateShippingFee();

    const finalAmount = totalAmount + shippingFee - totalDiscount;
    return finalAmount < 0 ? 0 : finalAmount;
  };

  const calculateFinalAmount = () => {
    const totalAmount = calculateTotalAmount();
    const shippingFee = calculateShippingFee();
    return totalAmount + shippingFee;
  }


  return {
    calculateFinalAmountWithDiscount,
    calculateShippingFee,
    calculateTotalAmount,
    calculateTotalDiscount,
    calculateFinalAmount,
  };
}


export { useOrderCalculator };
