import PlainLink from '../PlainLink/PlainLink';
import styled from 'styled-components';
import { Product } from '../../types';

type Props = {
  product: Product;
};

const SHOPPING_CART_ICON = (
  <svg
    width="100%"
    viewBox="0 0 51 44"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46.2746 34.705L50.8177 9.95501C50.8287 9.8454 50.8287 9.73461 50.8177 9.62501C50.8177 9.26033 50.6981 8.9106 50.4851 8.65273C50.2721 8.39487 49.9832 8.25001 49.682 8.25001H13.2691L11.6563 0.976256C11.5855 0.69321 11.4411 0.445361 11.2447 0.269497C11.0483 0.093633 10.8103 -0.000872914 10.566 6.07642e-06H1.97952C1.6783 6.07642e-06 1.38941 0.144872 1.17641 0.402734C0.963411 0.660597 0.84375 1.01033 0.84375 1.37501C0.84375 1.73968 0.963411 2.08942 1.17641 2.34728C1.38941 2.60514 1.6783 2.75001 1.97952 2.75001H9.70277L16.7446 34.7738C16.7921 34.9655 16.8736 35.1423 16.9835 35.292C17.0934 35.4416 17.2289 35.5604 17.3806 35.64C16.9566 36.505 16.7366 37.4942 16.7446 38.5C16.7446 39.9587 17.2232 41.3576 18.0752 42.3891C18.9272 43.4205 20.0827 44 21.2877 44C22.4926 44 23.6481 43.4205 24.5001 42.3891C25.3521 41.3576 25.8307 39.9587 25.8307 38.5C25.8259 37.5328 25.6104 36.5842 25.2061 35.75H37.8131C37.4088 36.5842 37.1933 37.5328 37.1885 38.5C37.1885 39.9587 37.6671 41.3576 38.5191 42.3891C39.3711 43.4205 40.5266 44 41.7316 44C42.9365 44 44.092 43.4205 44.944 42.3891C45.796 41.3576 46.2746 39.9587 46.2746 38.5C46.271 37.4843 46.0352 36.4896 45.5932 35.6263C45.7583 35.5478 45.9059 35.4236 46.0243 35.2636C46.1426 35.1036 46.2284 34.9123 46.2746 34.705ZM41.6066 11H48.2622L47.2514 16.5H41.1069L41.6066 11ZM13.8711 11H21.4012L21.901 16.5H15.0863L13.8711 11ZM16.9149 24.75L15.6997 19.25H22.1622L22.6733 24.75H16.9149ZM17.5282 27.5H22.9232L23.4229 33H18.7549L17.5282 27.5ZM21.2877 41.25C20.8384 41.25 20.3992 41.0887 20.0256 40.7865C19.6521 40.4844 19.3609 40.0549 19.189 39.5524C19.0171 39.0499 18.9721 38.497 19.0598 37.9635C19.1474 37.4301 19.3637 36.9401 19.6814 36.5555C19.9991 36.1709 20.4039 35.909 20.8445 35.8028C21.2851 35.6967 21.7419 35.7512 22.1569 35.9593C22.572 36.1675 22.9268 36.52 23.1764 36.9722C23.426 37.4244 23.5592 37.9561 23.5592 38.5C23.5592 39.2294 23.3199 39.9288 22.8939 40.4445C22.4679 40.9603 21.8901 41.25 21.2877 41.25ZM30.3738 33H25.7058L25.2061 27.5H30.3738V33ZM30.3738 24.75H24.9562L24.4451 19.25H30.3738V24.75ZM30.3738 16.5H24.1952L23.6955 11H30.3738V16.5ZM37.3134 33H32.6454V27.5H37.8131L37.3134 33ZM38.0744 24.75H32.6454V19.25H38.5741L38.0744 24.75ZM38.8353 16.5H32.6454V11H39.3237L38.8353 16.5ZM41.7316 41.25C41.2823 41.25 40.8431 41.0887 40.4695 40.7865C40.096 40.4844 39.8048 40.0549 39.6329 39.5524C39.461 39.0499 39.416 38.497 39.5037 37.9635C39.5913 37.4301 39.8076 36.9401 40.1253 36.5555C40.443 36.1709 40.8478 35.909 41.2884 35.8028C41.729 35.6967 42.1858 35.7512 42.6008 35.9593C43.0159 36.1675 43.3707 36.52 43.6203 36.9722C43.8699 37.4244 44.0031 37.9561 44.0031 38.5C44.0031 39.2294 43.7638 39.9288 43.3378 40.4445C42.9118 40.9603 42.334 41.25 41.7316 41.25ZM44.2303 33H39.5963L40.096 27.5H45.2411L44.2303 33ZM40.3573 24.75L40.8684 19.25H46.763L45.7522 24.75H40.3573Z"
      fill="currentColor"
    />
  </svg>
);

function ProductCard({ product }: Props) {
  const { id, name, price, stock, description, image } = {
    ...product,
  };

  return (
    <PlainLink to={`/product/${id}`} disabled={stock <= 0}>
      <StyledProductCard>
        <CardImageContainer>
          {stock > 0 ? (
            <CardImageOverlay>
              <p>{description}</p>
              <div>구매하기</div>
            </CardImageOverlay>
          ) : (
            <OutOfStockOverlay>품절</OutOfStockOverlay>
          )}
          <img src={image} alt={name} />
        </CardImageContainer>
        <CardDescriptionContainer>
          <h3>{name}</h3>
          <p>{price.toLocaleString('ko-KR')} 원</p>
        </CardDescriptionContainer>
        <CardButtonContainer>
          <button>{SHOPPING_CART_ICON}</button>
        </CardButtonContainer>
      </StyledProductCard>
    </PlainLink>
  );
}

const OutOfStockOverlay = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${({ theme: { zPriorities } }) => zPriorities.front};
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 2rem;
  font-weight: 700;
`;

const CardImageOverlay = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${({ theme: { zPriorities } }) => zPriorities.front};

  background: rgba(0, 0, 0, 0.3);

  p {
    inset: 30px 30px 60px;
    color: white;
    position: absolute;

    line-height: 1.4rem;

    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }

  div {
    position: absolute;
    bottom: 0px;
    right: 0px;
    font-size: 24px;
    color: white;
    padding: 10px;
    background: ${({ theme: { colors } }) => colors.black};
  }
`;

const CardImageContainer = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 5;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  position: relative;

  img {
    width: 100%;
  }
`;

const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-column: 1 / 4;
  grid-row: 5;
  font-weight: 400;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
  }

  p {
    font-size: 20px;
  }
`;

const CardButtonContainer = styled.div`
  grid-column: 4;
  grid-row: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;

  button {
    color: inherit;
    background: none;
    width: 30px;
    height: 27px;
  }
`;

const StyledProductCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(5, 1fr);
  grid-gap: 10px;
  width: 282px;
  color: ${({ theme: { colors } }) => colors.black};

  :not(:hover) {
    ${CardImageContainer} {
      ${CardImageOverlay} {
        opacity: 0;
        transition-duration: 0.3s;
      }

      img {
        transform: scale(1, 1);
        transition-duration: 0.3s;
      }
    }
  }

  :hover {
    ${CardImageContainer} {
      ${CardImageOverlay} {
        opacity: 1;
        transition-duration: 0.3s;
      }

      img {
        transform: scale(1.05, 1.05);
        transition-duration: 0.3s;
      }
    }

    ${CardDescriptionContainer} > h3 {
      text-decoration: underline;
    }
  }
`;

export default ProductCard;
