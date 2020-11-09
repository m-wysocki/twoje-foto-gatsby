import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import SidebarContext from '../../context/sidebarContext';
import Navigation from './navigation';
import * as S from '../styled/sidebar.styled';
import logo from '../../assets/images/logo.png';

export const animateSidebar = (node, direction) => {
  const sidebarElements = node.querySelectorAll('.contentBox')[0].children;

  gsap.set([...sidebarElements], { autoAlpha: direction === 'up' ? 0 : 1 });
  const tl = gsap.timeline();

  if (direction === 'up') {
    tl.fromTo(sidebarElements[0], { y: '+=100' }, { duration: 0.8, y: '-=100', autoAlpha: 1 });
    for (let i = 1; i < sidebarElements.length; i += 1) {
      tl.fromTo(
        sidebarElements[i],
        { y: '+=50' },
        { duration: 0.6, y: '-=50', autoAlpha: 1 },
        '<0.2',
      );
    }
  } else {
    for (let i = sidebarElements.length - 1; i >= 0; i--) {
      tl.fromTo(
        sidebarElements[i],
        { y: '0' },
        { duration: 0.6, y: '+=100', autoAlpha: 0 },
        '<0.1',
      );
    }
  }
};

const Sidebar = () => {
  const { sidebar } = useContext(SidebarContext);
  const { header, date, paragraph } = sidebar;

  useEffect(() => {
    animateSidebar(document, 'up');
  }, []);

  return (
    <S.Sidebar>
      <S.FilmStrip />
      <Navigation />
      <S.ContentBox className="contentBox">
        <S.Logo src={logo} alt="Twoje Foto - logo" hidden={header && true} />
        <S.Header>{header}</S.Header>
        <S.Date>{date}</S.Date>
        <S.Paragraph>{paragraph}</S.Paragraph>
      </S.ContentBox>
      <S.Socials>
        <a href="https://www.facebook.com/twojefoto.net/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/twoje_foto/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <S.Realization
          href="mailto:mateusz.wysocki53@gmail.com"
          title="kliknij, aby wysłać wiadomość e-mail"
        >
          realizacja: M.Wysocki
        </S.Realization>
      </S.Socials>
      <S.FilmStrip right />
    </S.Sidebar>
  );
};

export default Sidebar;
