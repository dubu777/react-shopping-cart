import { Items } from "@/types/Item";
import ItemCard from "../ItemCard/ItemCard";

interface IItemListProps {
  cartItems: Items[] | null;
}
export default function ItemList({ cartItems }: IItemListProps) {
  return (
    <>
      {cartItems &&
        cartItems?.map((item) => <ItemCard key={item.id} cartItem={item} />)}
    </>
  );
}
