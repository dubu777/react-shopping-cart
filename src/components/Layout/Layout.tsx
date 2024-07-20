import { PropsWithChildren } from 'react';
import * as S from './Layout.styles';

export default function Layout({children}: PropsWithChildren) {
  return (
    <S.Container>{children}</S.Container>
  )
}