import { CheckedBox, NoneCheckedBox } from "../../../asset";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import { Wrapper } from "./LabelCheckBox.styles";

interface ILabelCheckBoxProps {
  isChecked?: boolean;
  size?: "small" | "medium";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

export default function LabelCheckBox({
  isChecked = false,
  onClick,
  size = "medium",
  children,
}: ILabelCheckBoxProps) {
  const textSize = {
    small: "body",
    medium: "subTitle",
  } as const;
  return (
    <Wrapper>
      <IconButton
        iconPath={isChecked ? CheckedBox : NoneCheckedBox}
        alt="checkBox"
        onClick={onClick}
        size={size}
      />
      {children &&
        <Text type={textSize[size]}>{children}</Text>
      }
    </Wrapper>
  );
}
