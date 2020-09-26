import React, {useEffect} from 'react';
import Navigation from "./navigation";
import gsap from 'gsap';
import logo from '../assets/images/logo.png';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import * as S from './sidebarStyles';

export const animateSidebar = (node, direction) => {
  const sidebarElements = node.getElementsByClassName("contentBox")[0].children;

  gsap.set([...sidebarElements], {autoAlpha: direction === 'up' ? 0 : 1});
  const tl = gsap.timeline();

  if(direction === 'up'){
    tl.fromTo(sidebarElements[0], {y: '+=100'}, {duration: 1, y: '-=100', autoAlpha: 1});
    for(let i=1; i < sidebarElements.length; i++){
      tl.fromTo(sidebarElements[i], {y: '+=50'}, {duration: 1, y: '-=50', autoAlpha: 1}, "<0.5");
    }
  }else{
    for(let i=(sidebarElements.length-1); i >= 0; i--){
      tl.fromTo(sidebarElements[i], {y: '0'}, {duration: 0.6, y: '+=100', autoAlpha: 0}, "<0.2");
    }
  }
}

const Sidebar = ({sidebarInfo}) => {
  const {header, date, paragraph} = sidebarInfo;

  useEffect(()=>{
    animateSidebar(document, 'up');
  }, []);

  return (
      <S.Sidebar>
        <S.FilmStrip/>
        <Navigation/>
        <S.ContentBox className='contentBox'>
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
