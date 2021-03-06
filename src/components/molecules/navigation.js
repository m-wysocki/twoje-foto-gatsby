import React from 'react';
import styled from 'styled-components';
import TlLink from '../atoms/tl-link';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  a {
    color: ${({ theme }) => theme.colorTextLight};
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    position: relative;
    padding-bottom: 0.5rem;
    ${({ theme }) => theme.mqxs} {
      font-size: 0.9rem;
      letter-spacing: 0;
    }
    &::before {
      content: '';
      width: 100%;
      height: 0.15rem;
      background-color: ${({ theme }) => theme.colorExtra};
      opacity: 1;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.2s ease-in-out;
    }
    &:hover,
    &.active {
      &::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`;

const Navigation = () => (
  <StyledNav>
    <TlLink to="/">Strona główna</TlLink>
    <TlLink to="/galeria">Galeria</TlLink>
    <TlLink to="/o-nas">O nas</TlLink>
    <TlLink to="/kontakt">Kontakt</TlLink>
  </StyledNav>
);

export default Navigation;
