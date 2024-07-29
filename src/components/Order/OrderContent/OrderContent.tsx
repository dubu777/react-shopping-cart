import {
  ContentContainer,
  TitleWrapper,
} from "@/components/Cart/CartContent/CartContent.styles";
import ItemList from "@/components/Cart/ItemList/ItemList";
import Divider from "@/components/common/Divider/Divider";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Text from "@/components/common/Text/Text";
import TotalAmount from "@/components/common/TotalAmount/TotalAmount";
import { messageProps, messages } from "@/constants/message";
import { useLocation } from "react-router-dom";

export default function OrderContent() {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems;

  
  return (
    <>
      <Header showTitle={false} showBackButton={true} />
      <ContentContainer>
        <>
          <TitleWrapper>
            <Text type="title" $margin="0 0 10px 0">
              {messages.ORDER_TITLE}
            </Text>
            <Text type="body">
              {messageProps.oderItme(selectedItems?.length)}
            </Text>
            <Text type="body">{messages.ORDER_CHECK}</Text>
          </TitleWrapper>
          <Divider />
          <ItemList cartItems={selectedItems} type="order" />
          <TotalAmount type="order" selectedItems={selectedItems}/>
        </>
      </ContentContainer>
      <Footer onClick={() => {}} isDisable={selectedItems.length < 0}>
        결제하기
      </Footer>
    </>
  );
}
