const messages = {
  CART_TITLE: "장바구니",
  ALL_CHECK: "전체선택",
  SELECTED_DELETE: "선택삭제",
  DELETE: "삭제",
  FREE_SHIPPING_FEE: "총 주문 금액이 5만원 이상일 경우 무료 배송됩니다.",
  ORDER_CHECK: '최종 결제 금액을 확인해 주세요.',
  ORDER_TITLE: '주문하기',
};

const messageProps = {
  includedItme: (length: number) => {
    return `현재 ${length}개의 상품이 담겨있습니다.`;
  },
  oderItme: (length: number) => {
    return `${length}개의 상품을 주문합니다.`;
  },
};

export { messageProps, messages };
