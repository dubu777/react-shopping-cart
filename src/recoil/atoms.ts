import { atom, atomFamily } from 'recoil';
import { ItemDetailsStateType, Items } from '../types/Item';
import { Coupon } from '../types/Coupon';

export const itemsState = atom<Items[]>({
  key: 'itemsState',
  default: [],
});

export const itemDetailsState = atomFamily<ItemDetailsStateType, number>({
  key: 'itemDetailsState',
  default: {
    quantity: 1,
    price: 0,
    isChecked: true,
  },
});

export const couponsState = atom<Coupon[]>({
  key: 'couponsState',
  default: [],
});

export const selectedCouponsState = atom<Coupon[]>({
  key: 'selectedCouponsState',
  default: [],
});

export const remoteAreaState = atom<boolean>({
  key: 'remoteAreaState',
  default: false,
});
