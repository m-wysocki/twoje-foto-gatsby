import styled from 'styled-components';

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colorMain};
  font-weight: ${({ theme }) => theme.fontMedium};
  font-size: ${({ small }) => (small ? '1.4rem' : '1.8rem')};
  margin-top: 0;
  margin-bottom: 1.3rem;
  position: relative;
  width: auto;
  display: inline-block;
  z-index: 1;

  ${({ theme }) => theme.mqxs} {
    font-size: ${({ small }) => (small ? '1.2rem' : '1.6rem')};
  }

  &::before {
    content: '';
    width: 100%;
    height: 40%;
    background-color: ${({ theme }) => theme.colorExtra};
    z-index: -1;
    opacity: 0.4;
    position: absolute;
    bottom: 0;
  }
`;
