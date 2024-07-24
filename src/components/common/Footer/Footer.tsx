import theme from "../../../styles/theme";
import Text from "../Text/Text";
import * as S from "./Footer.styles";

export interface IFooterProps {
  children: string;
  isDisable?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Footer({ children, isDisable = true, onClick }: IFooterProps) {

  return (
    <S.FooterContainer
      $backgroundColor={isDisable ? theme.color.gray : theme.color.dark}
      onClick={onClick}
      disabled={isDisable}
    >
      <Text type="body" color="light">{children}</Text>
    </S.FooterContainer>
  );
}
