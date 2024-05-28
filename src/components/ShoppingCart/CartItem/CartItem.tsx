import { useRecoilState } from 'recoil';
import Button from 'components/common/Button/Button';
import CheckBox from 'components/common/CheckBox/CheckBox';
import QuantityStepper from '../QuantityStepper/QuantityStepper';
import { TCartItem } from 'types/CartItem.type';
import { selectedCartItemListSelector } from 'recoil/CartItem/selectors/selectors';

import * as S from './CartItem.style';

interface CartItemProps {
  item: TCartItem;
  isReadonly?: boolean;
  onRemoveItem?: (cartItemId: number) => void;
  onUpdateQuantity?: (cartItemId: number, quantity: number) => void;
}

function CartItem({ item, isReadonly = false, onRemoveItem, onUpdateQuantity }: CartItemProps) {
  const { id, quantity, product } = item;

  const [isSelected, setIsSelected] = useRecoilState(selectedCartItemListSelector(item));

  const handleIsSelected = () => setIsSelected(isSelected);

  return (
    <S.Layout>
      {!isReadonly && onRemoveItem && (
        <S.Header>
          <CheckBox id={product.name} isChecked={isSelected} onChange={handleIsSelected} />
          <Button customStyle={S.DeleteButton} text="삭제" onClick={() => onRemoveItem(id)} />
        </S.Header>
      )}
      <S.Body>
        <S.ItemImage src={product.imageUrl} />
        <S.ItemContainer>
          <S.ItemInfoContainer>
            <S.ItemText>{product.name}</S.ItemText>
            <S.ItemPriceText>{product.price.toLocaleString()}원</S.ItemPriceText>
          </S.ItemInfoContainer>
          {!isReadonly && onUpdateQuantity ? (
            <QuantityStepper
              quantity={quantity}
              onMinusButtonClick={() => onUpdateQuantity(id, quantity - 1)}
              onPlusButtonClick={() => onUpdateQuantity(id, quantity + 1)}
            />
          ) : (
            <S.ItemText>{quantity}개</S.ItemText>
          )}
        </S.ItemContainer>
      </S.Body>
    </S.Layout>
  );
}

export default CartItem;
