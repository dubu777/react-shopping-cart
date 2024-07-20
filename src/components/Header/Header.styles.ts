import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({theme}) =>theme.color.black};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 10px;

`;

export const Title = styled.h1`
  color: ${({theme}) => theme.color.white};
  font-size: ${({theme}) => theme.fontSize.heading}
`;