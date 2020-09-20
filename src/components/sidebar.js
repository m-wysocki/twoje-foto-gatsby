import React from 'react';
import Navigation from "./navigation";
import logo from '../assets/images/logo.png';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import * as S from './sidebarStyles';

const Sidebar = ({sidebarInfo}) => {
  const {header, date, paragraph} = sidebarInfo;
  return (
      <S.Sidebar>
        <S.FilmStrip/>
        <Navigation/>
        <S.ContentBox>
          {header ? (<S.Header>{header}</S.Header>) : (<S.Logo src={logo} alt="Twoje Foto - logo"/>)}
          {date && (<S.Date>{date}</S.Date>)}
          {paragraph && (<S.Paragraph>{paragraph}</S.Paragraph>)}
        </S.ContentBox>
        <S.Socials>
          <a href='https://www.facebook.com/twojefoto.net/' target='_blank' rel="noreferrer">
            <FaFacebookF/>
          </a>
          <a href='https://www.instagram.com/twoje_foto/' target='_blank' rel="noreferrer">
            <FaInstagram/>
          </a>
        </S.Socials>
        <S.FilmStrip right/>
      </S.Sidebar>
  )
};

export default Sidebar;
