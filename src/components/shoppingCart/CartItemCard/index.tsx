import { useRecoilState } from "recoil";
import { cartItemSelectionsState } from "@/stores/cartItemSelections";
import useCartItems from "@/hooks/carts/useCartItems";

import Button from "../../_common/Button";
import { CheckButton, MinusButton, PlusButton } from "@/components/button";
import { CartItem } from "@/types/cartItem";

import * as S from "./styled";

interface CartItemCardProps {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: CartItemCardProps) => {
  const { id, product, quantity } = cartItem;

  const { removeCartItem, changeItemQuantity } = useCartItems();
  const [isCartItemsSelected, setIsCartItemsSelected] = useRecoilState(
    cartItemSelectionsState(id)
  );

  return (
    <S.Container>
      <S.Header>
        <CheckButton
          isChecked={isCartItemsSelected}
          onToggle={() => setIsCartItemsSelected((prev: boolean) => !prev)}
        />
        <Button
          $theme="white"
          $width="42px"
          $height="24px"
          onClick={() => removeCartItem(id)}
        >
          삭제
        </Button>
      </S.Header>
      <S.Body>
        <S.ItemImg src={product.imageUrl} />
        <S.ItemInfoWrapper>
          <S.ItemInfo>
            <span>{product.name}</span>
            <S.ItemPrice>{product.price.toLocaleString("ko-KR")}원</S.ItemPrice>
          </S.ItemInfo>
          <S.ItemQuantity>
            <MinusButton
              quantity={quantity}
              onClick={() => changeItemQuantity(id, quantity - 1)}
            />
            <span>{quantity}</span>
            <PlusButton
              quantity={quantity}
              onClick={() => changeItemQuantity(id, quantity + 1)}
            />
          </S.ItemQuantity>
        </S.ItemInfoWrapper>
      </S.Body>
    </S.Container>
  );
};

export default CartItemCard;
