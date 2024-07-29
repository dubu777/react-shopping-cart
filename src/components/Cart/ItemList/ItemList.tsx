import { Items } from "@/types/Item";
import ItemCard from "../ItemCard/ItemCard";

interface IItemListProps {
  cartItems: Items[];
  type: 'cart' | 'order';
}
export default function ItemList({ cartItems, type }: IItemListProps) {
  return (
    <>
      {cartItems &&
        cartItems?.map((item) => <ItemCard key={item.id} cartItem={item} type={type}/>)}
    </>
  );
}
