import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6.25rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${({ theme }) => theme.mqxs} {
    margin-bottom: 4rem;
    flex-wrap: wrap;
    flex-direction: column;
    &:nth-last-of-type(even) {
      flex-direction: column-reverse;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 45%;
  ${({ theme }) => theme.mqxs} {
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  width: 50%;
  ${({ theme }) => theme.mqxs} {
    width: 100%;
  }
`;
