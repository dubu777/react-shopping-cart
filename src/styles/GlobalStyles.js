import { css } from '@emotion/react';
import 'styles/utils/Fontawesome.css';
import 'styles/utils/ResetCss.css';

const GlobalStyles = css`
  :root {
    font-size: 16px;
    min-width: 960px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f6f6f6;
  }
`;

export default GlobalStyles;
