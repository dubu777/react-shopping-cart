import styled, { css } from "styled-components";
import { ButtonSize, ButtonTheme, IButtonProps } from "./Button";

const getSizeStyling = (size: ButtonSize, $buttonTheme: ButtonTheme) => {
  const sizeStyles = {
    small: css`
      height: 18px;
      font-size: ${({ theme }) => theme.fontSize.small};
      padding: ${$buttonTheme === "text" ? "0" : "0 4px"};
      border-radius: 3px;
    `,
    medium: css`
      height: 24px;
      padding: 0 10px;
      font-size: ${({ theme }) => theme.fontSize.body};
      padding: ${$buttonTheme === "text" ? "0" : "0 6px"};
      border-radius: 3px;
    `,
    large: css`
      height: 50px;
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.subTitle};
      border-radius: 10px;
    `,
  };
  return sizeStyles[size] || sizeStyles.medium;
};

const getThemeStyling = ($buttonTheme: ButtonTheme) => {
  const themeStyles = {
    dark: css`
      background-color: ${({ theme }) => theme.color.dark};
      color: ${({ theme }) => theme.color.light};
      border: none;
    `,
    light: css`
      background-color: ${({ theme }) => theme.color.light};
      color: ${({ theme }) => theme.color.dark};
      border: none;
    `,
    gray: css`
      background-color: ${({ theme }) => theme.color.light};
      color: ${({ theme }) => theme.color.dark};
      border: 1px solid ${({ theme }) => theme.color.gray};
    `,
    text: css`
      background-color: transparent;
      color: ${({ theme }) => theme.color.dark};
      border: none;
    `,
  };
  return themeStyles[$buttonTheme] || themeStyles.dark;
};

export const Button = styled.button<IButtonProps>`
  ${({ size = "medium", $buttonTheme = "dark" }) =>
    getSizeStyling(size, $buttonTheme)};
  ${({ $buttonTheme = "dark" }) => getThemeStyling($buttonTheme)};
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
