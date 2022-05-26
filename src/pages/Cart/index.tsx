import CartItem from "../../components/Cart/CartItem";
import CartOrderContainer from "../../components/Cart/CartOrder";
import Checkbox from "../../components/@shared/Checkbox";
import useCartList from "../../hooks/useCartList";
import * as S from "./index.styles";

const Cart = () => {
  const {
    cartData,
    changeAllCartChecked,
    deleteAllCheckedCart,
    checkedItemAmount,
    totalPrice,
  } = useCartList();

  const handleAllCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAllCartChecked(e.target.checked);
  };

  const handleCheckedItemDeleteButton = () => {
    deleteAllCheckedCart();
  };

  return (
    <>
      <S.Title>장바구니</S.Title>
      <S.DeleteButtonContainer>
        <Checkbox
          id={-1}
          label={
            checkedItemAmount === cartData.length ? "선택해제" : "전체선택"
          }
          value={checkedItemAmount === cartData.length}
          handleChange={handleAllCheckedChange}
        />
        <S.DeleteButton onClick={handleCheckedItemDeleteButton}>
          상품 삭제
        </S.DeleteButton>
      </S.DeleteButtonContainer>
      <S.ItemOrderContainer>
        <S.ItemListContainer>
          <S.CartTitle>{`LokBa PhotoCard (${cartData.length})`}</S.CartTitle>
          {cartData.map((cart) => (
            <CartItem key={cart.id} id={cart.productId} cartId={cart.id} />
          ))}
        </S.ItemListContainer>
        <S.OrderContainer>
          <CartOrderContainer
            itemAmount={checkedItemAmount}
            price={totalPrice}
          />
        </S.OrderContainer>
      </S.ItemOrderContainer>
    </>
  );
};

export default Cart;
