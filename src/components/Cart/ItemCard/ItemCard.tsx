import { Items } from "@/types/Item";
import * as S from "./ItemCard.styles";
import ItemCheckBox from "../ItemCheckBox/ItemCheckBox";
import { messages } from "@/constants/message";
import Text from "@/components/common/Text/Text";

import IconButton from "@/components/common/IconButton/IconButton";
import { Minus, Plus } from "@/asset";
import useCartItemStore from "@/store/useCartItemStore";
import { numberCommas } from "@/utils/numberCommas";

interface IItemCardProps {
  cartItem: Items;
  type: "cart" | "order";
}
export default function ItemCard({ cartItem, type }: IItemCardProps) {
  const commaNumber = numberCommas(cartItem.product.price);
  const { increaseQuantity, decreaseQuantity, toggleICartItem } =
    useCartItemStore();

  return (
    <S.ItemCardContainer>
    {type === 'cart' &&
      <ItemCheckBox
        showButton={true}
        buttonText={messages.DELETE}
        onCheckBoxClick={() => toggleICartItem(cartItem.id)}
        onButtonClick={() => {}}
        isSelected={cartItem.isSelected}
        buttonTheme="gray"
      />
    }
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
          {type === "cart" && (
            <S.QuantityWrapper>
              <IconButton
                iconPath={Minus}
                alt="minus"
                size="small"
                onClick={() => decreaseQuantity(cartItem.id)}
              />
              <Text $margin="0 10px" type="body">
                {cartItem.quantity}
              </Text>
              <IconButton
                iconPath={Plus}
                alt="minus"
                size="small"
                onClick={() => increaseQuantity(cartItem.id)}
              />
            </S.QuantityWrapper>
          )}
          {type === "order" && (
            <Text $margin="10px 0 0 0" type="body">
              {cartItem.quantity + "개"}
            </Text>
          )}
        </S.ItemContentWrapper>
      </S.ItemWrapper>
    </S.ItemCardContainer>
  );
}
