import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  a{
    color: #c3c3c3;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Maven Pro';
  }
`;

const Navigation = () => (
    <StyledNav>
      <Link to='/'>Strona główna</Link>
      <Link to='/galeria'>Galeria</Link>
      <Link to='/o-nas'>O nas</Link>
      <Link to='/kontakt'>Kontakt</Link>
    </StyledNav>
);

export default Navigation;