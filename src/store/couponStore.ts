import { atom, selector } from 'recoil';
import { fetchCoupons } from '@api/index';
import { cartItemsCheckedState, fetchCartItemState } from './productStore';
import { orderAmountState, totalShippingFeeState } from './orderStore';
import { couponCalculator } from './couponStore.util';
import { CouponType } from '../types';

export const couponsState = atom<CouponType[]>({
  key: 'couponsState',
  default: selector({
    key: 'couponsState/Default',
    get: async () => {
      try {
        const coupons = await fetchCoupons();
        return coupons;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  }),
});

export const couponSelectedState = atom<Record<string, boolean>>({
  key: 'couponSelectedState',
  default: {},
});

export const activeCouponCodesState = atom<string[]>({
  key: 'activeCouponCodesState',
  default: [],
});

export const discountAmountState = selector({
  key: 'discountAmountState',
  get: ({ get }) => {
    const coupons = get(couponsState);
    const activeCouponCodes = get(activeCouponCodesState);
    const activeCoupons = coupons.filter((coupon) => activeCouponCodes.includes(coupon.code));

    const isCheckedMap = get(cartItemsCheckedState);
    const checkoutProducts = get(fetchCartItemState).filter(
      (product) => isCheckedMap[product.id] === true,
    );

    const orderAmount = get(orderAmountState);
    const { totalShippingFee } = get(totalShippingFeeState);

    return couponCalculator({ activeCoupons, checkoutProducts, orderAmount, totalShippingFee });
  },
});
