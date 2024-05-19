import { CartItem } from '@appTypes/shoppingCart';
import { Checkbox, DeleteButton } from '@components/common';
import { CartListDescription } from '@components/shoppingCart';
import { useCheckCartItem, useDeleteCartItem, useFetchErrorBoundary } from '@hooks/index';

import * as Styled from './CartListItem.styled';

interface CartListItemProps {
  cartItem: CartItem;
}

const CartListItem: React.FC<CartListItemProps> = ({ cartItem }) => {
  const { onDeleteItem, fetchError } = useDeleteCartItem(cartItem.id);
  const { isChecked, onCheckCartItem } = useCheckCartItem();
  useFetchErrorBoundary(fetchError);
  return (
    <Styled.CartListContainer>
      <Styled.CartItemSelectionGroup>
        <Checkbox
          checked={isChecked(cartItem.id)}
          onChange={(event) => onCheckCartItem(event.target.checked, cartItem.id)}
        />
        <DeleteButton onClick={onDeleteItem}>삭제</DeleteButton>
      </Styled.CartItemSelectionGroup>
      <Styled.CartItemDetailContainer>
        <Styled.CartItemImage src={cartItem.product.imageUrl} />
        <CartListDescription cartItem={cartItem} />
      </Styled.CartItemDetailContainer>
    </Styled.CartListContainer>
  );
};

export default CartListItem;
