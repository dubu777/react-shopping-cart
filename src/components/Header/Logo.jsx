import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import shoppingCartIconWhite from "../../asset/shopping-cart-icon-white.svg";
import { PATH } from "./../../constants/index";

function Logo() {
  return (
    <Link to={PATH.ROOT}>
      <LogoContainer>
        <IconImg src={shoppingCartIconWhite} alt="장바구니 아이콘" />
        <Title>TAEPHIA SHOP</Title>
      </LogoContainer>
    </Link>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 380px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 50px;
  height: 44px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
`;

export default Logo;