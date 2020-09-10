import React from 'react';
import Navigation from "./navigation";
import styled, {css} from "styled-components";
import logo from '../assets/images/logo.png';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const StyledSidebar = styled.div`
  width: 33%;
  background-color: #1d1d1b;
  height: 100vh;
  position: relative;
  padding: 60px;
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

const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 15px;
`;

const Logo = styled.img`
  max-width: 180px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  color: #c3c3c3;
  line-height: 1.8;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const Socials = styled.div`
  position: absolute;
  bottom: 60px;
  left: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  svg{
    width: auto;
    height: 25px;
    fill: #c3c3c3;
    margin-right: 10px;
  }
`;


const Sidebar = () => (
    <StyledSidebar>
      <FilmStrip/>
      <Navigation/>
      <ContentBox>
        <Logo src={logo} alt="Twoje Foto - logo"/>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos dolores excepturi in magnam magni
          maiores odio similique veniam voluptatum.</Paragraph>
      </ContentBox>
      <Socials>
        <FaFacebookF />
        <FaInstagram />
      </Socials>
      <FilmStrip right/>
    </StyledSidebar>
);

export default Sidebar;