import { atom, selector } from 'recoil';
import { CART_POLICY } from '@constants/policy';
import {
  cartItemsCheckedState,
  productQuantityState,
  productsIdState,
  fetchCartItemState,
} from './productStore';
import { discountAmountState } from './couponStore';

export const additionalShippingFeeStatusState = atom({
  key: 'additionalShippingFeeStatusState',
  default: false,
});

export const orderAmountState = selector({
  key: 'orderAmountState',
  get: ({ get }) => {
    const products = get(fetchCartItemState);
    const isCheckedMap = get(cartItemsCheckedState);
    const orderAmount = products.reduce((accumulator, product) => {
      const isChecked = isCheckedMap[product.id];
      if (isChecked) {
        const quantity = get(productQuantityState(product.id));
        return accumulator + product.product.price * quantity;
      }
      return accumulator;
    }, 0);

    return orderAmount;
  },
});

export const totalAmountState = selector({
  key: 'totalAmountState',
  get: ({ get }) => {
    const orderAmount = get(orderAmountState);
    const discountAmount = get(discountAmountState);
    const { totalShippingFee } = get(totalShippingFeeState);

    return orderAmount + totalShippingFee - discountAmount;
  },
});

export const totalProductQuantityState = selector({
  key: 'totalProductQuantityState',
  get: ({ get }) => {
    const keys = get(productsIdState);
    const isAllCheckedMap = get(cartItemsCheckedState);

    const { totalCount, totalQuantity } = keys.reduce(
      (acc, key) => {
        const isChecked = isAllCheckedMap[key];

        if (isChecked === true) {
          const quantity = get(productQuantityState(key));
          acc.totalCount++;
          acc.totalQuantity += quantity;
        }

        return acc;
      },
      { totalCount: 0, totalQuantity: 0 },
    );

    return {
      totalCount,
      totalQuantity,
    };
  },
});

export const totalShippingFeeState = selector({
  key: 'totalShippingFeeState',
  get: ({ get }) => {
    const orderAmount = get(orderAmountState);
    const additionalShippingFeeStatus = get(additionalShippingFeeStatusState);

    const baseShippingFee =
      orderAmount >= CART_POLICY.shipping_throughput
        ? CART_POLICY.shipping_free
        : CART_POLICY.shipping_basic_fee;
    const totalShippingFee = additionalShippingFeeStatus
      ? CART_POLICY.shipping_additional_fee + baseShippingFee
      : baseShippingFee;

    return { baseShippingFee, totalShippingFee };
  },
});
