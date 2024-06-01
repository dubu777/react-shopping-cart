import { useRecoilValue } from 'recoil';
import {
  couponsState,
  remoteAreaState,
  selectedCouponsState,
} from '../recoil/atoms';
import { useDiscountCalculator } from './useDiscountCalculator';
import { orderItemsSelector } from '../recoil/selectors';
import { DELIVERY } from '../constants/Delivery';

export const useOrderCalculator = () => {
  const orderItems = useRecoilValue(orderItemsSelector);
  const coupons = useRecoilValue(couponsState);
  const selectedCoupons = useRecoilValue(selectedCouponsState);
  const { calculateDiscountAmount } = useDiscountCalculator();
  const isRemoteArea = useRecoilValue(remoteAreaState);

  /**
   * orderItemsSelector value 순회하며 총합 계산
   * @returns { number }
   */
  const calculateOrderTotal = () => {
    return orderItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  /**
   * 쿠폰으로 할인되는 금액 반환
   * @returns { number }
   */
  const calculateDiscountWithCoupon = (type: 'modal' | null = null) => {
    const relevantCoupons = type === 'modal' ? coupons : selectedCoupons;
    const checkedCoupons = relevantCoupons.filter((coupon) => coupon.isChecked);

    const orderTotal = calculateOrderTotal();
    const discountAmount = checkedCoupons.reduce(
      (total, coupon) => total + calculateDiscountAmount(coupon, orderTotal),
      0,
    );
    return discountAmount;
  };

  /**
   * 주문 금액에서 쿠폰으로 할인되는 금액을 뺀 값 반환
   * @returns { number }
   */
  const calculateTotalWithCoupon = (type: 'modal' | null = null) => {
    const orderTotal = calculateOrderTotal();
    const discountAmount = calculateDiscountWithCoupon(type);
    const deliveryFee = calculateDeliveryFee();
    return orderTotal - discountAmount + deliveryFee;
  };

  /**
   * 배송비 계산
   * @returns { number }
   */
  const calculateDeliveryFee = () => {
    const orderTotal = calculateOrderTotal();

    if (orderTotal > DELIVERY.noDeliveryFeeStandard) {
      return DELIVERY.noDeliveryFee;
    }
    return isRemoteArea
      ? DELIVERY.deliveryFee + DELIVERY.remoteArea
      : DELIVERY.deliveryFee;
  };

  return {
    calculateOrderTotal,
    calculateDiscountWithCoupon,
    calculateDeliveryFee,
    calculateTotalWithCoupon,
  };
};
