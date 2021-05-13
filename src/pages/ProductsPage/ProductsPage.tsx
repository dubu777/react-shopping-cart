import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from './ProductsPage.styles';
import * as T from '../../types';
import MESSAGE from '../../constants/messages';
import Spinner from '../../components/shared/Spinner/Spinner';
import ProductItem from '../../components/units/ProductItem/ProductItem';
import { RootState } from '../../modules';
import { addCartItemRequest, getCartItemsRequest } from '../../modules/cartItems/actions';
import { CartState } from '../../modules/cartItems/reducers';
import api from '../../api';

const ProductsPage = () => {
  const cartItems: CartState['cartItems'] = useSelector((state: RootState) => state.cartReducer.cartItems);

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<T.Product[]>([]);
  const getProducts = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      alert(MESSAGE.GET_PRODUCTS_FAILURE);
    }

    setLoading(false);
  }, []);

  const handleClickCart = (product: T.Product) => {
    if (isLoading) return;

    const cartItemIds = cartItems.data.map((cartItem) => cartItem.product.id);

    if (cartItemIds.includes(product.id)) {
      alert(MESSAGE.EXIST_CART_ITEM);
      return;
    }

    dispatch(addCartItemRequest(product))
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .then(() => {
        alert(MESSAGE.ADDED_CART_ITEM_SUCCESS);
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    dispatch(getCartItemsRequest());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
    };
    fetchData();
  }, [getProducts]);

  return (
    <Styled.Root>
      {isLoading ? (
        <Styled.SpinnerWrapper>
          <Spinner />
        </Styled.SpinnerWrapper>
      ) : (
        <Styled.ProductList>
          {products?.map((product: T.Product) => (
            <li key={product.id}>
              <ProductItem product={product} onClickCart={handleClickCart} />
            </li>
          ))}
        </Styled.ProductList>
      )}
    </Styled.Root>
  );
};

export default ProductsPage;
