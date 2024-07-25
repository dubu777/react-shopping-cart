import { CheckedBox, NoneCheckedBox } from "@/asset";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import { Wrapper } from "./LabelCheckBox.styles";

interface ILabelCheckBoxProps {
  isSelected?: boolean;
  size?: "small" | "medium";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  lableText?: string;
}

export default function LabelCheckBox({
  isSelected = false,
  onClick,
  size = "medium",
  lableText,
}: ILabelCheckBoxProps) {
  const textSize = {
    small: "body",
    medium: "subTitle",
  } as const;
  return (
    <Wrapper>
      <IconButton
        iconPath={isSelected ? CheckedBox : NoneCheckedBox}
        alt="checkBox"
        onClick={onClick}
        size={size}
      />
      {lableText &&
        <Text type={textSize[size]}>{lableText}</Text>
      }
    </Wrapper>
  );
}
