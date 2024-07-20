import styled, { css } from "styled-components";
import { ITextProps } from "./Text";

const getTypeStyling = (type: Required<ITextProps>["type"]) => {
  const styles = {
    title: css`
      font-size: ${({ theme }) => theme.fontSize.heading};
      font-weight: 700;
    `,
    subtitle: css`
      font-size: ${({ theme }) => theme.fontSize.body};
      font-weight: 700;
    `,
    body: css`
      font-size: ${({ theme }) => theme.fontSize.body};
      font-weight: 400;
    `,
    notification: css`
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: 200;
    `,
  };
  return styles[type] || styles.body;
};

export const StyledText = styled.p<ITextProps>`
  ${({type = 'body'}) => getTypeStyling(type)}
`;
