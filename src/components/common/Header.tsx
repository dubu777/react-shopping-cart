import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/back-icon.svg";

export interface HeaderProps {
  hasBackButton: boolean;
  title?: string;
}

export default function Header({ hasBackButton, title }: HeaderProps) {
  const navigate = useNavigate();

  const onBackButtonClick = () => navigate(-1);

  return (
    <S.HeaderContainer>
      {hasBackButton ? <S.BackButton onClick={onBackButtonClick} /> : <S.Title>{title}</S.Title>}
    </S.HeaderContainer>
  );
}

const S = {
  HeaderContainer: styled.header`
    height: 64px;
    background-color: black;
    display: flex;
    align-items: center;
    padding-left: 24px;
  `,

  BackButton: styled(BackIcon)`
    cursor: pointer;
    width: 32px;
    height: 32px;
  `,

  Title: styled.div`
    font-size: 20px;
    font-weight: 800;
    color: white;
    width: fit-content;
  `,
};
