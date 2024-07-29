import Modal from "@/components/common/Modal/Modal";
import * as S from "./CouponModal.styles";
import Text from "@/components/common/Text/Text";
import IconButton from "@/components/common/IconButton/IconButton";
import { iconPath } from "@/constants/iconPath";
import CouponMoalCard from "../CouponMoalCard/CouponMoalCard";
import { Coupon } from "@/types/Coupon";
import Button from "@/components/common/Button/Button";
import { numberCommas } from "@/utils/numberCommas";
import React from "react";
import Divider from "@/components/common/Divider/Divider";

interface ICouponSelectModalProps {
  isVisible: boolean;
  onClose: () => void;
  coupons: Coupon[];
  selectedCoupon: Coupon[];
  totalAmount: number;
  totalDiscountAmount: number;
}

export default function CouponModal({
  isVisible,
  onClose,
  coupons,
  selectedCoupon,
  totalAmount,
  totalDiscountAmount,
}: ICouponSelectModalProps) {
  console.log(totalAmount, "totalAmounttotalAmount");
  const handleUseCoupon = () => {
    onClose();
  };
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <S.CouponModalContainer>
        <S.TitleWrapper>
          <Text type="subTitle">쿠폰을 선택해 주세요</Text>
          <IconButton
            iconPath={iconPath.CLOSE}
            onClick={onClose}
            alt="닫기 버튼"
          />
        </S.TitleWrapper>
        <S.CouponModalContent>
          <Text type="notification">
            쿠폰은 최대 2개까지 사용할 수 있습니다.
          </Text>
          {coupons.map((coupon, index) => (
            <React.Fragment key={coupon.id}>
              <CouponMoalCard
                key={coupon.id}
                coupon={coupon}
                selectedCoupon={selectedCoupon}
                totalAmount={totalAmount}
              />
              {index < coupons.length - 1 && <Divider />}
            </React.Fragment>
          ))}
          <S.ButtonWrapper>
            <Button $buttonTheme="dark" size="large" onClick={handleUseCoupon}>
              총 {numberCommas(totalDiscountAmount)}원 쿠폰 사용하기
            </Button>
          </S.ButtonWrapper>
        </S.CouponModalContent>
      </S.CouponModalContainer>
    </Modal>
  );
}
