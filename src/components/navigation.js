import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  a{
    color: ${({theme}) => theme.colorTextLight};
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 8px;
    &::before{
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${({theme}) => theme.colorExtra};
      opacity: 1;
      position: absolute;
      bottom: 0;
      left: 0; 
      right: 0;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform .2s ease-in-out;
    }
    &:hover, &.active{
      &::before{
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`;

const Navigation = () => (
    <StyledNav>
      <Link activeClassName="active" to='/'>Strona główna</Link>
      <Link activeClassName="active" to='/galeria'>Galeria</Link>
      <Link activeClassName="active" to='/o-nas'>O nas</Link>
      <Link activeClassName="active" to='/kontakt'>Kontakt</Link>
    </StyledNav>
);

export default Navigation;