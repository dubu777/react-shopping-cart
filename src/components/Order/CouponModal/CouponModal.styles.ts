import styled from "styled-components";

const CouponModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`;
const CouponModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 15px;
`;
export { ButtonWrapper, CouponModalContainer, TitleWrapper,CouponModalContent };
