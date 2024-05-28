import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import { PATHS } from 'constants/PATHS';
import * as S from './ErrorPage.style';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.ErrorTextContainer>
          <h1>404</h1>
          <h2>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</h2>
          <p>
            페이지의 주소가 잘못 입력되었거나,
            <br />
            주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          </p>
        </S.ErrorTextContainer>
        <Link to={PATHS.ROOT}>
          <S.ConfirmButton type="button">메인으로</S.ConfirmButton>
        </Link>
      </S.Main>
    </>
  );
};

export default ErrorPage;
