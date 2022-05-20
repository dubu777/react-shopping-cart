import React from 'react';
import {useNavigate} from 'react-router-dom';

import Button from 'components/common/Button';
import {ReactComponent as LogoIcon} from 'assets/logoIcon.svg';

import {HeaderWrapper} from 'components/common/Header/style';
import {FlexRowWrapper} from 'components/common/style';

import {PATH} from 'constants/path';

export default function Header() {
  const navigation = useNavigate();

  const handleLogoClick = () => navigation(PATH.HOME);
  const handleCartButtonClick = () => navigation(PATH.CART);

  return (
    <HeaderWrapper>
      <Button onClick={handleLogoClick}>
        <LogoIcon />
      </Button>
      <FlexRowWrapper justifyContent="flex-end">
        <Button onClick={handleCartButtonClick}>장바구니</Button>
        <Button>주문목록</Button>
      </FlexRowWrapper>
    </HeaderWrapper>
  );
}
