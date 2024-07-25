import { messageProps, messages } from "@/constants/message";
import Text from "../../common/Text/Text";
import useCartItemStore from "@/store/useCartItemStore";
import useGetCartItems from "@/api/queries/useGetCartItems";
import { useEffect } from "react";
import Header from "../../common/Header/Header";
import * as S from "./CartContent.styles";
import Divider from "@/components/common/Divider/Divider";
import ItemList from "../ItemList/ItemList";
import ItemCheckBox from "../ItemCheckBox/ItemCheckBox";

export default function CartContent() {
  const { data } = useGetCartItems();
  const { cartItems, setCartItems, toggleIAllCartItem, deleteSelectedCartItem } = useCartItemStore();
  const allSelected = cartItems?.every((item) => item.isSelected) || false;

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
              <Text type="title" $margin="0 0 10px 0">
                {messages.CART_TITLE}
              </Text>
              <Text type="body">
                {messageProps.includedItme(cartItems?.length)}
              </Text>
            </S.TitleWrapper>
            <ItemCheckBox
              showButton={true}
              buttonText={messages.SELECTED_DELETE}
              onCheckBoxClick={toggleIAllCartItem}
              onButtonClick={deleteSelectedCartItem}
              buttonTheme="text"
              labelText={messages.ALL_CHECK}
              isSelected={allSelected}
            />
            <Divider />
            <ItemList cartItems={cartItems} />
            <Text $margin="20px 0">{messages.FREE_SHIPPING_FEE}</Text>
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
