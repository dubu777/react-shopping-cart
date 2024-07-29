import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.color.light};
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  height: 600px;
  overflow-y: auto;
`;

export { ModalBackground, ModalContent };
