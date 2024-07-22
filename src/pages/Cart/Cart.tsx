import { useEffect } from "react";
import useGetCartItems from "../../api/queries/useGetCartItems"
import useCartItenStore from "../../store/useCartItemStore";
// import { mockCoupons } from "../../mocks/data/coupons";

export default function Cart() {
  const {data} = useGetCartItems();
  const {cartItems, setCartItems} = useCartItenStore();
  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data]);

  console.log(cartItems, 'getcartitems');

  return (
    <h1>장바구니</h1>
  )
}