import React, { useEffect } from 'react';
import gsap from 'gsap';
import MainTemplate from '../templates/mainTemplate';
import useSidebar from '../hooks/useSidebar';
import { StyledLink } from '../components/atoms/styled-link';
import { Paragraph } from '../components/atoms/paragraph';
import { Heading } from '../components/atoms/heading';
import ContentWrapper from '../components/organisms/content-wrapper';
import * as S from '../components/organisms/homepage.styled';
import home2 from '../assets/images/home2.jpg';

export const animateHomePage = (node, direction) => {
  const homeImgElements = node.getElementsByClassName('homeImg');
  const homeTxtElements = node.getElementsByClassName('homeTxt');

  const tl = gsap.timeline();

  const startOpacity = direction === 'up' ? 0 : 1;
  const endOpacity = direction === 'up' ? 1 : 0;
  const startTranslateImg1 = direction === 'up' ? '-100%' : '0';
  const endTranslateImg1 = direction === 'up' ? '0' : '-100%';
  const startTranslateImg2 = direction === 'up' ? '100%' : '0';
  const endTranslateImg2 = direction === 'up' ? '0' : '100%';

  gsap.set([homeImgElements[0]], { autoAlpha: startOpacity, transformOrigin: 'bottom center' });
  gsap.set([homeImgElements[1]], { autoAlpha: startOpacity, transformOrigin: 'top center' });
  gsap.set([...homeTxtElements], { autoAlpha: startOpacity });
  tl.fromTo(
    homeImgElements[0],
    { translateY: startTranslateImg1 },
    { duration: 1, translateY: endTranslateImg1, autoAlpha: endOpacity },
  );
  tl.fromTo(
    homeImgElements[1],
    { translateY: startTranslateImg2 },
    { duration: 1, translateY: endTranslateImg2, autoAlpha: endOpacity },
    '<0.5',
  );
  tl.fromTo(homeTxtElements[0], {}, { duration: 1, autoAlpha: endOpacity }, '<0.5');
  tl.fromTo(homeTxtElements[1], {}, { duration: 1, autoAlpha: endOpacity }, '<0.5');
};

const IndexPage = () => {
  useSidebar({
    header: false,
    date: false,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos dolores excepturi in magnam magni maiores odio similique veniam voluptatum.',
  });

  useEffect(() => {
    animateHomePage(document, 'up');
  }, []);

  return (
    <MainTemplate>
      <ContentWrapper pageType="homepage">
        <S.HomeWrapper>
          <S.Column>
            <S.ImageWrapper className="homeImg">
              <img src={home2} alt="" />
            </S.ImageWrapper>
            <S.Content className="homeTxt">
              <Heading>About me</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque
                consequatur deserunt ea eligendi iste laudantium nesciunt odit quaerat, similique!
                Debitis, ullam!
              </Paragraph>
              <StyledLink href="#">zobacz więcej</StyledLink>
            </S.Content>
          </S.Column>
          <S.Column>
            <S.Content className="homeTxt">
              <Heading>Our galleries</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque
                consequatur deserunt ea eligendi iste laudantium nesciunt odit quaerat, similique!
                Debitis, ullam!
              </Paragraph>
              <StyledLink href="#">zobacz więcej</StyledLink>
            </S.Content>
            <S.ImageWrapper className="homeImg">
              <img src={home2} alt="" />
            </S.ImageWrapper>
          </S.Column>
        </S.HomeWrapper>
      </ContentWrapper>
    </MainTemplate>
  );
};

export default IndexPage;
