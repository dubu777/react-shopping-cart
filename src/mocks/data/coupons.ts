import { Coupon } from "../../types/Coupon";


export const mockCoupons: Coupon[] = [
  {
    id: 1,
    code: 'FIXED5000',
    description: '5,000원 할인 쿠폰',
    discount: 5000,
    discountType: 'fixed',
    minimumAmount: 100000,
    expirationDate: '2024-11-30',
    isSelected: false,
  },
  {
    id: 3,
    code: 'FREESHIPPING',
    description: '5만원 이상 구매 시 무료 배송 쿠폰',
    discountType: 'freeShipping',
    minimumAmount: 50000,
    expirationDate: '2024-08-31',
    isSelected: false,
  },
  {
    id: 4,
    code: 'MIRACLESALE',
    description: '미라클모닝 30% 할인 쿠폰',
    discount: 30,
    discountType: 'percentage',
    availableStartTime: '04:00:00',
    availableEndTime: '07:00:00',
    expirationDate: '2024-07-31',
    isSelected: false,
  },
];
