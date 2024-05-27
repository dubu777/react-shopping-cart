import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
  return <main css={main}>{children}</main>;
}

const main = css`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 36px 24px;

  overflow-y: scroll;
`;
