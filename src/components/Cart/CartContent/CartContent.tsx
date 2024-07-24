import { messageProps, messages } from "@/constants/message";
import Text from "../../common/Text/Text";
import useCartItemStore from "@/store/useCartItemStore";
import useGetCartItems from "@/api/queries/useGetCartItems";
import { useEffect } from "react";
import Header from "../../common/Header/Header";
import * as S from "./CartContent.styles";
import LabelCheckBox from "../../common/LabelCheckBox/LabelCheckBox";
import Button from "@/components/common/Button/Button";

export default function CartContent() {
  const { data } = useGetCartItems();
  const { cartItems, setCartItems } = useCartItemStore();

  useEffect(() => {
    data && setCartItems(data);
  }, [data]);
  console.log(data, "서버 데이터 불러오기");
  console.log(cartItems, "주스탠드 cartItem");

  return (
    <>
      <Header title="SHOP" showTitle={true} showBackButton={true} />
      <S.CartContentContainer>
        {cartItems ? (
          <>
          <S.TitleWrapper>
            <Text type="title" $margin="0 0 10px 0">{messages.CART_TITLE}</Text>
            <Text type="body">
              {messageProps.includedItme(cartItems?.length)}
            </Text>
          </S.TitleWrapper>
          <S.CheckBoxWrapper>
            <LabelCheckBox onClick={() => {}} size="small">{messages.ALL_CHECK}</LabelCheckBox>
            <Button onClick={() => {}} $buttonTheme="text" size="small">선택삭제</Button>
            </S.CheckBoxWrapper>

          </>
        ) : (
          <>
            <Text type="title">{messages.CART_TITLE}</Text>
            <Text type="body">장바구니가 비었어요</Text>
          </>
        )}
      </S.CartContentContainer>
    </>
  );
}
