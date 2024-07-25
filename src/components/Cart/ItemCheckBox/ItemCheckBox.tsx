import { CheckBoxWrapper } from "./ItemCheckBox.styles";
import LabelCheckBox from "@/components/common/LabelCheckBox/LabelCheckBox";
import Button, { ButtonTheme } from "@/components/common/Button/Button";

interface IItemCheckBoxProps {
  labelText?: string; 
  showButton: boolean;
  buttonText: string;
  isSelected: boolean;
  buttonTheme: ButtonTheme;
  onCheckBoxClick: () => void;
  onButtonClick: () => void;
}
export default function ItemCheckBox({
  labelText,
  showButton,
  buttonText,
  onCheckBoxClick,
  onButtonClick,
  isSelected,
  buttonTheme = 'gray',
}: IItemCheckBoxProps) {
  return (
    <CheckBoxWrapper>
      <LabelCheckBox onClick={onCheckBoxClick} lableText={labelText} isSelected={isSelected}/>
      {showButton && (
        <Button onClick={onButtonClick} $buttonTheme={buttonTheme} size="medium">
          {buttonText}
        </Button>
      )}
    </CheckBoxWrapper>
  );
}
