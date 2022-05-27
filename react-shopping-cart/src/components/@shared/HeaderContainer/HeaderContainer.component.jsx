import styled from 'styled-components';
import { LAYER_POSITION } from 'constants';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 10%;
  background-color: ${({ theme }) => theme.usingColor.headerBackground};
  box-shadow: 0 4px 4px ${({ theme }) => theme.usingColor.shadow};
  z-index: ${LAYER_POSITION.FOREGROUND};
`;

export default HeaderContainer;