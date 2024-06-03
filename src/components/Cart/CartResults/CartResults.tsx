/** @jsxImportSource @emotion/react */
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CartResultGuideStyle, CartResultGuideContainerStyle, CartResultsContainerStyle } from "./CartResults.style";
import { useRecoilValue } from "recoil";
import { orderAmountSelector } from "../../../store/selector/selectors";
import { cartItemIdListState } from "../../../store/atom/atoms";
import { SHIPPING_CONSTANT } from "../../../constants";
import PaymentDetail from "../../common/PaymentDetail/PaymentDetail";
import Divider from "../../common/Divider/Divider";

const CartResults = () => {
  const orderAmount = useRecoilValue(orderAmountSelector);
  const ids = useRecoilValue(cartItemIdListState);

  const cartShippingFee = orderAmount >= SHIPPING_CONSTANT.FREE_CRITERIA ? 0 : SHIPPING_CONSTANT.DEFAULT;
  const totalAmount = orderAmount + cartShippingFee;

  return (
    <div css={CartResultsContainerStyle}>
      {ids.length !== 0 && (
        <>
          <div css={CartResultGuideContainerStyle}>
            <IoIosInformationCircleOutline size={15} />
            <div css={CartResultGuideStyle}>
              총 주문 금액이 {SHIPPING_CONSTANT.FREE_CRITERIA.toLocaleString() + "원"} 이상일 경우 무료 배송됩니다.
            </div>
          </div>

          <Divider />
          <PaymentDetail title="주문 금액" amount={orderAmount} />
          <PaymentDetail title="배송비" amount={cartShippingFee} />
          <Divider />
          <PaymentDetail title="총 결제 금액" amount={totalAmount} />
        </>
      )}
    </div>
  );
};

export default CartResults;
