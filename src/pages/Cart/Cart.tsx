import { useEffect } from "react";
import useGetCartItems from "../../api/queries/useGetCartItems"
import useCartItenStore from "../../store/useCartItemStore";
import { useGetCoupon } from "../../api/queries/useGetCoupon";
// import { mockCoupons } from "../../mocks/data/coupons";

export default function Cart() {
  const {data: cart} = useGetCartItems();
  const {cartItems, setCartItems} = useCartItenStore();
  const {data: coupon} = useGetCoupon();

  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  console.log(cartItems, 'get-cart-items');
  console.log(coupon, 'get-coupon-list');
  
  return (
    <h1>장바구니</h1>
  )
}