import IconButton from "../IconButton/IconButton";
import { Container, Title } from "./Header.styles";

interface IHeaderProps {
  showTitle: boolean;
  showBackButton: boolean;
  title: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Header({
  showTitle,
  showBackButton,
  title,
  onBackButtonClick = () => {},
}: IHeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <IconButton
          alt="back-arrow"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow-white.svg`}
          onClick={onBackButtonClick}
        />
      )}
      {showTitle && <Title>{title}</Title>}
    </Container>
  );
}
