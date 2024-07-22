import { useQuery } from "@tanstack/react-query";
import { getCoupon } from "../coupon";
import { queryKey } from "../../constants/key";

export function useGetCoupon() {
  return useQuery({
    queryFn: () => getCoupon(),
    queryKey: [queryKey.COUPON, queryKey.GET_COUPON]
  })
}

