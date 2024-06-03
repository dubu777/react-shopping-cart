import { useRecoilValue } from "recoil";
import { cartState } from "../../../../store/atom/atoms";
import CartItem from "./CartItem/CartItem";

const CartItemList = () => {
  const cartItems = useRecoilValue<CartItemInfo[]>(cartState);

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem CartItemInfo={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartItemList;
