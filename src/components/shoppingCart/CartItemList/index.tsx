import { useRecoilState } from "recoil";
import { isAllCartItemSelectedState } from "@/stores/cartItemSelections";

import useCartItems from "@/hooks/carts/useCartItems";

import CartItemCard from "@/components/shoppingCart/CartItemCard";
import { CheckButton } from "@/components/button";
import NotificationText from "@/components/_common/NotificationText";

import { CartItem } from "@/types/cartItem";
import { CART_PRICE } from "@/constants/cart";

import * as S from "./styled";

const CartItemList = () => {
  const { cartItems } = useCartItems();
  const [isAllCartItemSelected, setIsAllCartItemSelected] = useRecoilState(
    isAllCartItemSelectedState
  );

  return (
    <S.Container>
      <S.AllCheckWrapper>
        <CheckButton
          isChecked={isAllCartItemSelected}
          onToggle={() => setIsAllCartItemSelected((prev) => !prev)}
        />
        <span>전체선택</span>
      </S.AllCheckWrapper>
      {cartItems.map((cartItem: CartItem) => (
        <CartItemCard key={cartItem.id} cartItem={cartItem} />
      ))}
      <NotificationText
        text={`총 주문 금액이 ${CART_PRICE.minOrderPrice.toLocaleString(
          "ko-KR"
        )}원 이상일 경우 무료
  배송됩니다.`}
      />
    </S.Container>
  );
};

export default CartItemList;
