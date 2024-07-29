import { Items } from "@/types/Item";
import Text from "../Text/Text";
import { TotalAmountContainer, TotalAmountWrapper } from "./TotalAmount.styles";
import { useOrderCalculator } from "@/hooks/useOrderCalculator";
import { useCouponStore } from "@/store/useCouponStore";
import { numberCommas } from "@/utils/numberCommas";
import Divider from "../Divider/Divider";
import { messages } from "@/constants/message";
import Button from "../Button/Button";

import useModal from "@/hooks/useModal";
import CoupontModal from "@/components/Order/CouponModal/CouponModal";
import { useGetCoupon } from "@/api/queries/useGetCoupon";
import { useEffect, useRef } from "react";

interface ITotalAmountProps {
  selectedItems: Items[];
  type: "cart" | "order";
}

export default function TotalAmount({
  type,
  selectedItems,

}: ITotalAmountProps) {
  const {setCoupons, getUsableCoupons, selectedCoupon} = useCouponStore();
  const {data} = useGetCoupon();
  const totalAmountRef = useRef(null);

  useEffect(() => {
    data && setCoupons(data)
  }, [data])

  const {
    calculateTotalAmount,
    calculateShippingFee,
    calculateFinalAmount,
    calculateTotalDiscount,
  } = useOrderCalculator(selectedItems, selectedCoupon);
  const { isVisible, show, hide } = useModal();
  const totalAmount = calculateTotalAmount();
  const totalDiscountAmount = calculateTotalDiscount();
  const usableCoupon = getUsableCoupons(totalAmount, new Date());

  console.log(getUsableCoupons(totalAmount, new Date()), "getusableCoupons");
  return (
    <TotalAmountContainer ref={totalAmountRef}>
      {type === "order" && (
        <Button $buttonTheme="gray" size="large" onClick={show}>
          {`사용 가능한 쿠폰이 ${usableCoupon.length}개 있습니다.`}
        </Button>
      )}
      <Text $margin="20px 0">{messages.FREE_SHIPPING_FEE}</Text>
      <TotalAmountWrapper>
        <Text type="subTitle">주문금액</Text>
        <Text type="subTitle">{numberCommas(calculateTotalAmount())}</Text>
      </TotalAmountWrapper>
      <TotalAmountWrapper>
        <Text type="subTitle">배송비</Text>
        <Text type="subTitle">{numberCommas(calculateShippingFee())}</Text>
      </TotalAmountWrapper>
      {type === "order" && (
        <TotalAmountWrapper>
          <Text type="subTitle">쿠폰 할인 금액</Text>
          <Text type="subTitle">{numberCommas(calculateTotalDiscount())}</Text>
        </TotalAmountWrapper>
      )}
      <Divider size="small" $color="dark" />
      <TotalAmountWrapper>
        <Text type="subTitle">총 결제 금액</Text>
        <Text type="subTitle">{numberCommas(calculateFinalAmount())}</Text>
      </TotalAmountWrapper>
      <CoupontModal isVisible={isVisible} onClose={hide} coupons={usableCoupon} selectedCoupon={selectedCoupon} totalAmount={totalAmount} totalDiscountAmount={totalDiscountAmount} />
    </TotalAmountContainer>
  );
}
