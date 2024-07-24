import styled, { css } from "styled-components";
import { IIconButtonProps } from "./IconButton";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

const getSizeStyling = (size: Required<IIconButtonProps>["size"]) => {
  const sizeStyles = {
    small: css`
      width: 16px;
      height: 16px;
    `,
    medium: css`
      width: 24px;
      height: 24px;
    `,
  };

  return sizeStyles[size] || sizeStyles.medium;
};

export const Img = styled.img<{ size: Required<IIconButtonProps>["size"] }>`
  ${({ size = "medium" }) => getSizeStyling(size)}
`;
