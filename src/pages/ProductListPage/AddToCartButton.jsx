import React from "react";
import styled from "styled-components";

import shoppingCartIconBlack from "../../asset/shopping-cart-icon-black.svg";

function AddToCartButton() {
  return (
    <IconButton
      title="장바구니 담기"
      onClick={(e) => {
        e.stopPropagation();
        alert("🛒아직입니다~~^^🛒");
      }}
    >
      <img src={shoppingCartIconBlack} alt="장바구니 담기" />
    </IconButton>
  );
}

const IconButton = styled.button`
  padding: 10px 0 10px 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 30px;
    :hover {
      transform: scale(1.05);
    }
  }
`;

export default AddToCartButton;