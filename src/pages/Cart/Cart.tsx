import { useEffect } from "react";
import useGetCartItems from "../../api/queries/useGetCartItems"
import useCartItenStore from "../../store/useCartItemStore";
// import { mockCoupons } from "../../mocks/data/coupons";

export default function Cart() {
  const {data} = useGetCartItems();
  const {cartItems, setCartItems} = useCartItenStore();
  useEffect(() => {
    data && setCartItems(data)
  },[data])
  // const data = mockCoupons;
  console.log(cartItems, 'getcartitems');

  
  return (
    <h1>장바구니</h1>
  )
}