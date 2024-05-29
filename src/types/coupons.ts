export interface RawCoupon {
  id: number;
  code: string;
  description: string;
  discount?: number;
  discountType: "fixed" | "percentage" | "buyXgetY" | "freeShipping";
  minimumAmount?: number;
  buyQuantity?: number;
  getQuantity?: number;
  availableTime?: {
    start: string;
    end: string;
  };
  expirationDate: string;
}

type DiscountType = "fixed" | "percentage" | "buyXgetY" | "freeShipping"; // 할인타입

type Hour =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23";
type MinuteOrSecond =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "57"
  | "58"
  | "59";

export type AvailableTime = {
  start: `${Hour}:${MinuteOrSecond}:${MinuteOrSecond}`;
  end: `${Hour}:${MinuteOrSecond}:${MinuteOrSecond}`;
}; // 적용 가능 조건: 사용 가능 시간

interface RequiredProps {
  id: number; // 식별자
  code: string; // 할인 코드
  description: string; // 할인 설명
  discountType: DiscountType; // 할인타입
  expirationDate: string; // 만료기한
  isSelected: boolean; // 선택 여부
  isValidCoupon: boolean; // 유효 여부(만료 여부)
  isApplicableCoupon: boolean; // 적용 가능 여부
}

export interface FixedDiscountCoupon extends RequiredProps {
  discountType: "fixed";
  discount: number; // 적용되는 것: 할인금액
  minimumAmount?: number; // 적용 가능 조건: 최소 주문 금액
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export interface PercentageDiscountCoupon extends RequiredProps {
  discountType: "percentage";
  discount: number; // 적용되는 것: 할인율
  minimumAmount?: number; // 적용 가능 조건: 최소 주문 금액
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export interface BOGOCoupon extends RequiredProps {
  discountType: "buyXgetY";
  buyQuantity: number; // 적용 가능 조건: 주문 수량
  getQuantity: number; // 적용되는 것: 무료 증정 수량
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export interface FreeShippingCoupon extends RequiredProps {
  discountType: "freeShipping";
  minimumAmount: number; // 적용 가능 조건: 최소 주문 금액
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export type Coupon =
  | RequiredProps
  | FixedDiscountCoupon
  | PercentageDiscountCoupon
  | BOGOCoupon
  | FreeShippingCoupon;

export const isFixedDiscountCoupon = (
  coupon: Coupon | RawCoupon
): coupon is FixedDiscountCoupon => {
  return coupon.discountType === "fixed";
};

export const isPercentageDiscountCoupon = (
  coupon: Coupon | RawCoupon
): coupon is PercentageDiscountCoupon => {
  return coupon.discountType === "percentage";
};

export const isBOGOCoupon = (
  coupon: Coupon | RawCoupon
): coupon is BOGOCoupon => {
  return coupon.discountType === "buyXgetY";
};

export const isFreeShippingCoupon = (
  coupon: Coupon | RawCoupon
): coupon is FreeShippingCoupon => {
  return coupon.discountType === "freeShipping";
};
