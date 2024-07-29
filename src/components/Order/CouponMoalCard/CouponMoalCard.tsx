import LabelCheckBox from "@/components/common/LabelCheckBox/LabelCheckBox";
import Text from "@/components/common/Text/Text";
import useDiscountCalculator from "@/hooks/useDiscountCalculator";
import { useOrderCalculator } from "@/hooks/useOrderCalculator";
import useCartItemStore from "@/store/useCartItemStore";
import { useCouponStore } from "@/store/useCouponStore";
import { Coupon } from "@/types/Coupon";
import { getDateLocaleFormat, getTimeLocaleFormat } from "@/utils/date";
import { numberCommas } from "@/utils/numberCommas";
import { CouponModalCardWrapper } from "./CouponMoalCard.styles";

interface ICouponMoalCardProps {
  coupon: Coupon;
  selectedCoupon: Coupon[];
  totalAmount: number;
}

export default function CouponMoalCard({ coupon, selectedCoupon, totalAmount }: ICouponMoalCardProps) {
  const { toggleCoupon } = useCouponStore();
  const {selectedItems} = useCartItemStore();
  const {calculateTotalDiscount} = useOrderCalculator(selectedItems, selectedCoupon);
  console.log(calculateTotalDiscount(), 'calculateTotalDiscount');
  const {calculateDiscountAmount} = useDiscountCalculator()
  const discountAmount = calculateDiscountAmount(coupon, totalAmount)
  console.log(selectedCoupon, 'selectedCoupons');
  console.log(totalAmount, 'totla');
  
  return (
    <CouponModalCardWrapper>
      <LabelCheckBox
        lableText={coupon.description}
        isSelected={coupon.isSelected}
        onClick={() => toggleCoupon(coupon.id)}
      />
      <Text type="body">
        만료일: {getDateLocaleFormat(coupon.expirationDate)}
      </Text>
      {coupon.minimumAmount && (
        <Text type="body">
          최소 주문 금액: {numberCommas(coupon.minimumAmount)}원
        </Text>
      )}
      {coupon.availableStartTime && coupon.availableEndTime && (
        <Text type="body">
          사용 가능 시간: {getTimeLocaleFormat(coupon.availableStartTime)}부터{" "}
          {getTimeLocaleFormat(coupon.availableEndTime)}까지
        </Text>
      )}
      <Text>{numberCommas(discountAmount)}원 할인</Text>
    </CouponModalCardWrapper>
  );
}
