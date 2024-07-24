const messages = {
  CART_TITLE: "장바구니",
  ALL_CHECK: '전체선택'
};

const messageProps = {
  includedItme: (length: number) => {
    return `현재 ${length}개의 상품이 담겨있습니다.`;
  },
};

export { messageProps, messages };
