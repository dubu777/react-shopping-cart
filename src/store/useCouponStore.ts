import { create } from "zustand";
import { Coupon } from "../types/Coupon";
import useCheckAvailableTime from "../hooks/useCheckAvailableTime";

interface CouponStoreState {
  coupons: Coupon[];
  selectedCoupon: Coupon[];
  setCoupons: (coupons: Coupon[]) => void;
  toggleCoupon: (id: number) => void;
  getUsableCoupons: (totalAmount: number, now: Date) => Coupon[];
}

export const useCouponStore = create<CouponStoreState>((set, get) => ({
  coupons: [],
  selectedCoupon: [],
  setCoupons: (coupons: Coupon[]) => {
    set({ coupons });
  },
  toggleCoupon: (id: number) => {
    set((state) => {
      const selectedCount = state.coupons.filter((coupon) => coupon.isSelected).length;

      const updatedCoupons = state.coupons?.map((coupon) => {
        if (coupon.id === id) {
          if (coupon.isSelected || selectedCount < 2) {
            return { ...coupon, isSelected: !coupon.isSelected };
          }
          return coupon;
        }
        return coupon;
      });

      const updatedSelectedCoupons = updatedCoupons.filter((coupon) => coupon.isSelected);

      console.log(updatedSelectedCoupons, "updatedSelectedCoupons");

      return {
        coupons: updatedCoupons,
        selectedCoupon: updatedSelectedCoupons,
      };
    });
  },
  getUsableCoupons: (totalAmount: number, now = new Date()) => {
    const { checkAvailableTime } = useCheckAvailableTime();
    const coupons: Coupon[] = get().coupons;
    console.log(totalAmount, coupons, "getUseable");
    const isUsable = coupons?.filter((coupon) => {
      const isUsableFreeShipping =
        coupon.discountType === "freeShipping" ? totalAmount < 50000 : true;

      const isUsableDate = new Date(coupon.expirationDate) > now;
      const isAvailableTime =
        coupon.availableStartTime && coupon.availableEndTime
          ? checkAvailableTime(
              coupon.availableStartTime,
              coupon.availableEndTime,
              now
            )
          : true;
      const meetsMinimumAmount = coupon.minimumAmount
        ? coupon.minimumAmount < totalAmount
        : true;

      return (
        isUsableFreeShipping &&
        isUsableDate &&
        isAvailableTime &&
        meetsMinimumAmount
      );
    });

    return isUsable;
  },
}));
