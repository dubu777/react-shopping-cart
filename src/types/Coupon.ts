export interface AvailableTime {
  start: string;
  end: string;
}

export interface Coupon {
  id: number;
  code: string;
  description: string;
  expirationDate: string;
  discountType: 'fixed' | 'freeShipping' | 'percentage';
  discount?: number;
  minimumAmount?: number;
  buyQuantity?: number;
  getQuantity?: number;
  availableStartTime?: string;
  availableEndTime?: string;
  isSelected: boolean;
}
