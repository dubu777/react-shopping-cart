import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../cart";
import { queryKey } from "../../constants/key";


function useGetCartItems() {
  return useQuery({
    queryFn: () => getCartItems(),
    queryKey: [queryKey.CART, queryKey.GET_CART_ITEM],
  })
}

export default useGetCartItems;