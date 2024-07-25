import { Items } from "@/types/Item";
import * as S from "./ItemCard.styles";
import ItemCheckBox from "../ItemCheckBox/ItemCheckBox";
import { messages } from "@/constants/message";
import Text from "@/components/common/Text/Text";
import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas";
import IconButton from "@/components/common/IconButton/IconButton";
import { Minus, Plus } from "@/asset";
import useCartItemStore from "@/store/useCartItemStore";

interface IItemCardProps {
  cartItem: Items;
}
export default function ItemCard({ cartItem }: IItemCardProps) {
  console.log(cartItem, "item-card");
  const commaNumber = formatNumberWithCommas(cartItem.product.price)
  const {increaseQuantity, decreaseQuantity, toggleICartItem} = useCartItemStore();

  return (
    <>
      <ItemCheckBox
        showButton={true}
        buttonText={messages.DELETE}
        onCheckBoxClick={() => toggleICartItem(cartItem.id)}
        onButtonClick={() => {}}
        isSelected={cartItem.isSelected}
        buttonTheme="gray"
      />
      <S.ItemWrapper>
        <S.ImageWrapper>
          <S.ImageCard
            src={cartItem.product.imageUrl}
            alt={cartItem.product.name}
          />
        </S.ImageWrapper>
        <S.ItemContentWrapper>
          <Text type="body">{cartItem.product.name}</Text>
          <Text type="subTitle">{commaNumber + "원"}</Text>
          <S.QuantityWrapper>
          <IconButton iconPath={Minus} alt="minus" size="small" onClick={() => decreaseQuantity(cartItem.id)}/>
            <Text $margin="0 10px" type="body">{cartItem.quantity}</Text>
          <IconButton iconPath={Plus} alt="minus" size="small" onClick={() => increaseQuantity(cartItem.id)}/>
          </S.QuantityWrapper>
        </S.ItemContentWrapper>
      </S.ItemWrapper>
    </>
  );
}
