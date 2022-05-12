import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import Image from 'components/shared/image/Image';
import CartIcon from 'components/shared/cartIcon/CartIcon';
import Modal from 'components/shared/modal/Modal';
import Button from 'components/shared/button/Button';
import Text from 'components/shared/text/Text';
import { ReactComponent as PlusIcon } from 'assets/plus_icon.svg';
import { ReactComponent as MinusIcon } from 'assets/minus_icon.svg';

import useClose from 'hooks/useClose';

import store from 'store/store';
import { PUT } from 'actions/action';

import {
  StyledProductItem,
  StyledProductContainer,
  StyledProductText,
  StyledQuantityContainer,
} from 'components/productItem/style';

import { PRODUCT } from 'constants';

const ProductItem = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(PRODUCT.MIN_QUANTITY);
  const { products } = useSelector(state => state.reducer);
  const [clearTimer, manualClose, autoClose] = useClose();
  const { name, price, image, isInCart } = products.find(product => product.id === id);

  const quantityRef = useRef(quantity);
  quantityRef.current = quantity;

  const putCart = () => {
    setIsOpen(false);
    store.dispatch({ type: PUT, id, quantity: quantityRef.current });
    clearTimer();
  };

  const handleCartClick = () => {
    if (isOpen) {
      putCart();
      return;
    }

    if (!isOpen) {
      setIsOpen(true);
      manualClose(putCart);
    }
  };

  const handleModalClick = () => {
    clearTimer();
    autoClose(putCart);
  };

  return (
    <StyledProductItem>
      <Image src={image} />
      <StyledProductContainer>
        <div>
          <StyledProductText name="true">{name}</StyledProductText>
          <StyledProductText price="true">{price}원</StyledProductText>
        </div>
        <div onClick={handleCartClick}>
          {isInCart ? (
            <Button>
              <StyledQuantityContainer>{quantity}</StyledQuantityContainer>
            </Button>
          ) : (
            <CartIcon />
          )}
        </div>
      </StyledProductContainer>
      {isOpen && (
        <Modal onClick={handleModalClick}>
          <Button
            onClick={() => setQuantity(prev => (prev > PRODUCT.MIN_QUANTITY ? prev - 1 : prev))}
          >
            <MinusIcon />
          </Button>
          <Text modal="true">{quantity}</Text>
          <Button onClick={() => setQuantity(prev => prev + 1)}>
            <PlusIcon />
          </Button>
        </Modal>
      )}
    </StyledProductItem>
  );
};

export default ProductItem;
