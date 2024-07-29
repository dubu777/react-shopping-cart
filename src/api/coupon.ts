import { Coupon } from "../types/Coupon";
import axiosInstance from "./axios";

const getCoupon = async (): Promise<Coupon[]> => {
  const { data } = await axiosInstance.get("/coupon");

  return data;
};

export { getCoupon };
