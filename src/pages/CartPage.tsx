import { css } from '@emotion/react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import { LOGO } from '@assets/images';
import Cart from '@components/Cart/Cart';
import Error from '@components/common/Error';
import Header from '@components/common/Header';
import Loading from '@components/common/Loading';

function CartPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      <Header>
        <button onClick={goHome} css={homeButton}>
          <img src={LOGO} alt="SHOP LOGO" />
        </button>
      </Header>

      <ErrorBoundary fallbackRender={({ error }) => <Error errorMessage={error.message} />}>
        <Suspense fallback={<Loading />}>
          <Cart />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default CartPage;

const homeButton = css`
  height: 100%;

  padding-left: 24px;

  background-color: inherit;

  font-size: 20px;
  font-weight: 800;
  color: #fff;
`;
