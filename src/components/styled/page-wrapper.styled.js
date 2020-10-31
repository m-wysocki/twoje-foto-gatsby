import styled from 'styled-components';

export const PageWrapperStyled = styled.div`
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  ${({ theme }) => theme.mqmd} {
    height: auto;
    flex-wrap: wrap;
  }
`;
