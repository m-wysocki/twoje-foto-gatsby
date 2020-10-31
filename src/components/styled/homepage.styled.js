import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
`;

export const Column = styled.div`
  width: 50%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3.5rem;
`;
