import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import GridWrapper from "../../components/GridWrapper";
import Item from "../../components/Item";
import ItemSkeleton from "../../components/ItemSkeleton";
import { v4 as uuidv4 } from "uuid";
import throttle from "../../utils/throttle";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import { LOAD_ITEM_AMOUNT } from "../../constants";
import useProductList from "../../hooks/useProductList";
import { product } from "../../types/product";
import useCart from "../../hooks/useCart";

const DELAY_TIME = 500;

const ItemList = () => {
  const sectionRef = useRef(null);
  const { createNewCart, cartData } = useCart();
  const {
    isLoading,
    data: products,
    isEnd,
    getProductsByPage,
  } = useProductList();

  const navigate = useNavigate();

  const delayGetProduct = throttle(DELAY_TIME, () => getProductsByPage());

  useInfinityScroll({
    ref: sectionRef,
    cb: delayGetProduct,
    endPoint: isEnd,
  });

  const handleItemClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  const ProductList: Function = (products: product[]): React.ReactElement[] =>
    products.map((product: product) => {
      const { id } = product;
      const itemCardElemProps = {
        key: product.id,
        onClick: () => {
          handleItemClick(product.id);
        },
        onClickShoppingCart: () => {
          createNewCart(id);
          console.log(cartData);
        },
        ...product,
      };

      return <Item {...itemCardElemProps} />;
    });

  return (
    <section>
      <GridWrapper>
        {ProductList(products)}
        {isLoading &&
          Array.from({ length: LOAD_ITEM_AMOUNT }).map(() => (
            <ItemSkeleton key={uuidv4()} />
          ))}
      </GridWrapper>
      <div ref={sectionRef}></div>
    </section>
  );
};

export default ItemList;
