import useReduxState from './useReduxState';
import { addShoppingBasketProduct, deleteShoppingBasketProduct } from 'actions';

function useShoppingBasket(selectorKey) {
  const { state: shoppingBasketList, dispatch } = useReduxState(selectorKey);

  const checkIsContainedProduct = productId => {
    return shoppingBasketList.find(productInfo => productInfo.id === productId) !== undefined;
  };

  const dispatchShoppingBasketAction = (productId, isContained) => {
    dispatch(
      isContained ? deleteShoppingBasketProduct(productId) : addShoppingBasketProduct(productId)
    );
  };

  return {
    shoppingBasketList,
    checkIsContainedProduct,
    dispatchShoppingBasketAction,
  };
}

export default useShoppingBasket;
