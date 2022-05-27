import styled, { css } from 'styled-components';

const Text = styled.div`
  font-style: normal;
  letter-spacing: 0.5px;
  margin: ${({ margin }) => margin || '0'};
  color: ${({ color, theme }) => color || theme.PALETTE.BLACK_001};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ fontSize }) => {
    switch (fontSize) {
      case 'small':
        return css`
          font-size: 16px;
        `;
      case 'medium':
        return css`
          font-size: 20px;
        `;
      case 'large':
        return css`
          font-size: 24px;
        `;
      case 'extraLarge':
        return css`
          font-size: 32px;
        `;
      default:
        return css`
          font-size: 20px;
        `;
    }
  }}
`;

export default Text;