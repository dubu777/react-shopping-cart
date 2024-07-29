import styled, { css } from "styled-components";
import { IDividerProps } from "./Divider";

const getSizeStyling = (size: Required<IDividerProps>["size"]) => {
  const sizeStyles = {
    small: css`
      border-bottom: 1px solid;
    `,
    medium: css`
      border-bottom: 2px solid;
    `,
  };
  return sizeStyles[size] || sizeStyles.small;
};
const getColorStyling = ($color: Required<IDividerProps>["$color"]) => {
  const colorStyles = {
    dark: css`
      border-color: ${({ theme }) => theme.color.dark};
    `,
    gray: css`
      border-color: ${({ theme }) => theme.color.gray};
    `,
  };
  return colorStyles[$color] || colorStyles.dark;
};

export const StyledDivider = styled.div<IDividerProps>`
  ${({size = 'small'}) => getSizeStyling(size)}
  ${({$color = 'dark'}) => getColorStyling($color)}
  width: 100%;
`;
