import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Product from "../components/Product";
import { loadProductsAPI, ProductState, selectProductState } from "../redux/modules/products";
import { AppDispatch } from "../redux/store";

function ProductList() {
  const { productList, loading, error }: ProductState = useSelector(selectProductState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadProductsAPI());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <div>
      <Wrapper>
        {loading
          ? "로딩 중..."
          : productList.map((product) => <Product key={product.id} productInfo={product} />)}
      </Wrapper>
    </div>
  );
}

export default ProductList;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 240px;
`;
