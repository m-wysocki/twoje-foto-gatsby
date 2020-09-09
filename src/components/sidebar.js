import React from 'react';
import Navigation from "./navigation";
import styled, {css} from "styled-components";

const StyledSidebar = styled.div`
  width: 33%;
  background-color: #1d1d1b;
  height: 100vh;
  position: relative;
`;
const FilmStrip = styled.div`
  width: 15px;
  height: 100%;
  position: absolute;
  left: 15px;
  top: 0;
  background-image: linear-gradient(180deg, transparent 0%, transparent 50%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.01) 100%);
  background-size: 15px 30px;
  background-repeat: repeat-y;
  
  ${({right}) => right && css`
    right: 15px;
    left: unset;
  `}
`;

const Sidebar = () => (
    <StyledSidebar>
      <FilmStrip/>
      <Navigation/>
      <FilmStrip right/>
    </StyledSidebar>
);

export default Sidebar;
