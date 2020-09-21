import React, {useRef, useEffect} from 'react';
import Navigation from "./navigation";
import logo from '../assets/images/logo.png';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import gsap from 'gsap';
import * as S from './sidebarStyles';

const Sidebar = ({sidebarInfo}) => {
  const {header, date, paragraph} = sidebarInfo;
  const contentBox = useRef(null);

  useEffect(() => {
    const sidebarElements = contentBox.current.children;

    gsap.set([...sidebarElements], {autoAlpha: 0});

    const tl = gsap.timeline();

    tl.fromTo(sidebarElements[0], {y: '+=100'}, {duration: 1, y: '-=100', autoAlpha: 1});
    for(let i=1; i < sidebarElements.length; i++){
      tl.fromTo(sidebarElements[i], {y: '+=50'}, {duration: 1, y: '-=50', autoAlpha: 1}, "<0.5");
    }
  }, []);

  return (
      <S.Sidebar>
        <S.FilmStrip/>
        <Navigation/>
        <S.ContentBox ref={contentBox}>
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
