import { CartItem } from "../types/cartItems";
import { UseCartItemsReturn } from "../hooks/useCartItemControl";
import styled from "styled-components";
import { COLORS } from "../styles";

export interface CartItemViewProps {
  cartItem: CartItem;
  cartItemControl: UseCartItemsReturn;
}

function CartItemView({ cartItem, cartItemControl }: CartItemViewProps) {
  const { remove, updateQuantity, toggleSelection } = cartItemControl;
  const cartItemId = cartItem.id;

  const handleCheckboxChange = () => {
    toggleSelection(cartItemId);
  };

  const handleRemoveButtonClick = () => {
    remove(cartItemId);
  };

  const handleIncreaseButtonClick = () => {
    updateQuantity(cartItemId, cartItem.quantity + 1);
  };

  const handleDecreaseButtonClick = () => {
    updateQuantity(cartItemId, cartItem.quantity - 1);
  };

  return (
    <S.CartItemContainer>
      <S.TopWrapper>
        <S.Checkbox
          type="checkbox"
          checked={cartItem.isSelected}
          onChange={handleCheckboxChange}
        />
        <S.RemoveButton onClick={handleRemoveButtonClick}>삭제</S.RemoveButton>
      </S.TopWrapper>

      <S.ProductOuterWrapper>
        <S.ProductImage src={cartItem.product.imageUrl} alt="Product Image" />
        <S.ProductInnerWrapper>
          <S.ProductInfo>
            <S.ProductName>{cartItem.product.name}</S.ProductName>
            <S.ProductPrice>
              {cartItem.product.price.toLocaleString()}원
            </S.ProductPrice>
          </S.ProductInfo>
          <S.CartItemCountControl>
            <S.CountButton
              onClick={handleDecreaseButtonClick}
              disabled={cartItem.quantity === 1}
            >
              -
            </S.CountButton>
            <S.Count>{cartItem.quantity}</S.Count>
            <S.CountButton onClick={handleIncreaseButtonClick}>+</S.CountButton>
          </S.CartItemCountControl>
        </S.ProductInnerWrapper>
      </S.ProductOuterWrapper>
    </S.CartItemContainer>
  );
}

CartItemView.Skeleton = () => {
  return (
    <S.CartItemContainer>
      <S.TopWrapper>
        <S.CheckboxSkeleton />
        <S.RemoveButtonSkeleton />
      </S.TopWrapper>

      <S.ProductOuterWrapper>
        <S.ProductImageSkeleton />
        <S.ProductInnerWrapper>
          <S.ProductInfo>
            <S.ProductNameSkeleton />
            <S.ProductPriceSkeleton />
          </S.ProductInfo>
          <S.CartItemCountControl>
            <S.CountButtonSkeleton />
            <S.CountSkeleton />
            <S.CountButtonSkeleton />
          </S.CartItemCountControl>
        </S.ProductInnerWrapper>
      </S.ProductOuterWrapper>
    </S.CartItemContainer>
  );
};

export default CartItemView;

const S = {
  CartItemContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid #d9d9d9;
    padding-top: 12px;
  `,

  TopWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Checkbox: styled.input`
    accent-color: black;
    margin: 0;
    width: 24px;
    height: 24px;
  `,

  RemoveButton: styled.button`
    width: 40px;
    height: 24px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    color: ${COLORS.PRIMARY_TEXT};
  `,

  ProductOuterWrapper: styled.div`
    display: flex;
    gap: 24px;
  `,

  ProductImage: styled.img`
    width: 112px;
    height: 112px;
    border-radius: 10px;
  `,

  ProductInnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 9.5px 0;
  `,

  CartItemCountControl: styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
  `,

  ProductInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  ProductName: styled.div`
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
  `,

  ProductPrice: styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 34.75px;
  `,

  CountButton: styled.button`
    width: 24px;
    height: 24px;
    line-height: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 8px;
  `,

  Count: styled.div`
    font-size: 12px;
    width: 20px;
    text-align: center;
  `,

  CheckboxSkeleton: styled.div`
    width: 24px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 4px;
  `,

  RemoveButtonSkeleton: styled.div`
    width: 40px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 4px;
  `,

  ProductImageSkeleton: styled.div`
    width: 112px;
    height: 112px;
    background-color: #e0e0e0;
    border-radius: 10px;
  `,

  ProductNameSkeleton: styled.div`
    width: 100px;
    height: 15px;
    background-color: #e0e0e0;
    border-radius: 4px;
  `,

  ProductPriceSkeleton: styled.div`
    width: 80px;
    height: 35px;
    background-color: #e0e0e0;
    border-radius: 4px;
  `,

  CountButtonSkeleton: styled.div`
    width: 24px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 8px;
  `,

  CountSkeleton: styled.div`
    width: 20px;
    height: 12px;
    background-color: #e0e0e0;
    border-radius: 4px;
  `,
};
