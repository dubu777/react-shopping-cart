// import { Coupon } from "../types/Coupon";
import { Items } from "../types/Item";
import axiosInstance from "./axios";

const getCartItems = async(): Promise<Items[] | null> => {
  const {data} = await axiosInstance.get('/cart-items');
  
  return data;
}

export {getCartItems}