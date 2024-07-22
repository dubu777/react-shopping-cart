export interface AvailableTime {
  start: string;
  end: string;
}

export interface Coupon {
  id: number;
  code: string;
  description: string;
  expirationDate: string;
  discountType: string;
  discount?: number;
  minimumAmount?: number;
  buyQuantity?: number;
  getQuantity?: number;
  availableTime?: AvailableTime;
  isChecked: boolean;
}