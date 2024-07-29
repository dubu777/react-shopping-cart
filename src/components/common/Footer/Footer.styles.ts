import styled from "styled-components";

interface FooterContainerProps {
  $backgroundColor: string;
}

export const FooterContainer = styled.button<FooterContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${(prop) => prop.$backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;