import { useSelectedCartItemSelector } from "hooks/useCartSelector";

import * as S from "./styles";

function OrderBox() {
  const selectedCartItemList = useSelectedCartItemSelector();
  const totalPayAmount = selectedCartItemList.reduce(
    (acc, cur) => acc + cur.detail.price * cur.amount,
    0
  );

  return (
    <S.OrderBoxWrapper>
      <S.OrderBoxTitle>결제예상금액</S.OrderBoxTitle>
      <S.OrderBoxDetail>
        <span>결제예상금액</span>
        <span>{totalPayAmount.toLocaleString()}원</span>
      </S.OrderBoxDetail>
      <S.ButtonWrapper>
        <S.OrderButton>주문하기 ({selectedCartItemList.length})</S.OrderButton>
      </S.ButtonWrapper>
    </S.OrderBoxWrapper>
  );
}

export default OrderBox;
