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
import TotalAmount from "@/components/common/TotalAmount/TotalAmount";
import Footer from "@/components/common/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { mainPath } from "@/constants";

export default function CartContent() {
  const { data } = useGetCartItems();
  const {
    cartItems,
    setCartItems,
    toggleIAllCartItem,
    deleteSelectedCartItem,
    selectedItems,
  } = useCartItemStore();
  const allSelected = cartItems?.every((item) => item.isSelected) || false;
  const navigate = useNavigate();
  const handleOrderCheck = () => {
    navigate(mainPath.ORDER, { state: {selectedItems} });
  };

  useEffect(() => {
    data && setCartItems(data);
  }, [data]);
console.log(selectedItems, '선택 아이템');


  return (
    <>
      <Header title="SHOP" showTitle={true} showBackButton={true} />
      <S.ContentContainer>
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
            <ItemList cartItems={cartItems} type="cart"/>
            <TotalAmount type="cart" selectedItems={selectedItems} />
          </>
        ) : (
          <>
            <Text type="title">{messages.CART_TITLE}</Text>
            <Text type="body">장바구니가 비었어요</Text>
          </>
        )}
      </S.ContentContainer>
      <Footer onClick={handleOrderCheck} isDisable={selectedItems.length <= 0}>주문확인</Footer>
    </>
  );
}
