import { memo } from 'react';
import styled from 'styled-components';

interface ProductInfoProps {
  name: String;
  price: number;
}
const ProductInfo = ({ name, price }: ProductInfoProps) => {
  return (
    <Styled.ProductInfo>
      <Styled.ProductName>{name}</Styled.ProductName>
      <Styled.ProductPrice>{price.toLocaleString()}원</Styled.ProductPrice>
    </Styled.ProductInfo>
  );
};

const Styled = {
  ProductInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    padding-left: 16px;
  `,

  ProductName: styled.span`
    font-weight: 400;
    font-size: 16px;

    letter-spacing: 0.5px;
  `,

  ProductPrice: styled.span`
    font-weight: 400;
    font-size: 20px;

    letter-spacing: 0.5px;
  `,
};
export default memo(ProductInfo);
