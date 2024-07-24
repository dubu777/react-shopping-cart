import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${({theme}) =>theme.color.dark};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  & button {
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.color.light};
  font-size: ${({theme}) => theme.fontSize.heading}
`;