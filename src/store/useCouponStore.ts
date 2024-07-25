import { create } from "zustand";
import { Coupon } from "../types/Coupon";
import useCheckAvailableTime from "../hooks/useCheckAvailableTime";

interface CouponStoreState {
  coupons: Coupon[] | null;
  setCoupons: (coupons: Coupon[]) => void;
  toggleCoupon: (id: number) => void;
}

export const useCouponStore = create<CouponStoreState>((set, get) => ({
  coupons: null,
  setCoupons: (coupons: Coupon[]) => {
    set({ coupons });
  },
  toggleCoupon: (id: number) => {
    set((state) => ({
      coupons: state.coupons?.map((coupon) =>
        coupon.id === id ? { ...coupon, isSelected: !coupon.isSelected } : coupon
      ),
    }));
  },
  getUsableCoupons: (totalAmount: number, now = new Date()) => {
    const { checkAvailableTime } = useCheckAvailableTime();
    const coupons: Coupon[] | null = get().coupons || null;
    coupons?.filter((coupon) => {
      const isUsableFreeShipping =
        coupon.discountType !== "freeShipping" || totalAmount < 50000;
      const isUsableDate = new Date(coupon.expirationDate) > now;
      const isAvailableTime =
        coupon.availableStartTime && coupon.availableEndTime
          ? checkAvailableTime(
              coupon.availableStartTime,
              coupon.availableEndTime,
              now
            )
          : true;
      const meetsMinimumAmount =
        !coupon.minimumAmount || coupon.minimumAmount < totalAmount;

      return (
        isUsableFreeShipping &&
        isUsableDate &&
        isAvailableTime &&
        meetsMinimumAmount
      );
    });
  },
  getCheckedCount: () => {
    return get().coupons?.reduce(
      (count, coupon) => (coupon.isSelected ? count + 1 : count),
      0
    );
  },
}));
