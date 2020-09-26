import React, {useEffect} from "react";
import styled from 'styled-components';
import gsap from "gsap";
import home2 from '../assets/images/home2.jpg';
import {StyledLink} from "../components/styled-link";
import {Paragraph} from "../components/paragraph";
import {Heading} from "../components/heading";
import Sidebar from "../components/sidebar";
import ContentWrapper from "../components/content-wrapper";
import {PageWrapper} from "../components/page-wrapper";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
`;

const Column = styled.div`
  width: 50%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  height: 60%;
  background-color: lightslategrey;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img{
    max-width: 100%;
  }
`;

const Content = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
`;

export const animateHomePage = (node, direction) => {
  const homeImgElements = node.getElementsByClassName("homeImg");
  const homeTxtElements = node.getElementsByClassName("homeTxt");


  const tl = gsap.timeline();

  if(direction === 'up'){
    gsap.set([homeImgElements[0]], {autoAlpha: 0, transformOrigin:"bottom center"});
    gsap.set([homeImgElements[1]], {autoAlpha: 0, transformOrigin:"top center"});
    gsap.set([...homeTxtElements], {autoAlpha: 0});
    tl.fromTo(homeImgElements[0], {translateY: "-100%"}, {duration: 1, translateY: "0", autoAlpha: 1});
    tl.fromTo(homeImgElements[1], {translateY: "100%"}, {duration: 1, translateY: "0", autoAlpha: 1}, "<0.5");
    tl.fromTo(homeTxtElements[0], {}, {duration: 1, autoAlpha: 1}, "<0.5");
    tl.fromTo(homeTxtElements[1], {}, {duration: 1, opacity: "1", autoAlpha: 1}, "<0.5");
  }else{
    gsap.set([homeImgElements[0]], {autoAlpha: 1, transformOrigin:"bottom center"});
    gsap.set([homeImgElements[1]], {autoAlpha: 1, transformOrigin:"top center"});
    gsap.set([...homeTxtElements], {autoAlpha: 1});
    tl.fromTo(homeImgElements[0], {translateY: "0"}, {duration: 1, translateY: "-100%", autoAlpha: 0});
    tl.fromTo(homeImgElements[1], {translateY: "0"}, {duration: 1, translateY: "100%", autoAlpha: 0}, "<0.5");
    tl.fromTo(homeTxtElements[0], {}, {duration: 1, autoAlpha: 0}, "<0.5");
    tl.fromTo(homeTxtElements[1], {}, {duration: 1, autoAlpha: 0}, "<0.5");
  }
}

const IndexPage = ({transitionStatus, entry, exit}) => {

  const sidebarInfo = {
    header: false,
    date: false,
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos dolores excepturi in magnam magni maiores odio similique veniam voluptatum.',
  }

  useEffect(() => {
      animateHomePage(document, 'up');
  }, []);

  return (
      <PageWrapper>
        <Sidebar sidebarInfo={sidebarInfo}/>
        <ContentWrapper pageType='homepage' >
          <HomeWrapper>
            <Column>
              <ImageWrapper className="homeImg">
                <img src={home2} alt=""/>
              </ImageWrapper>
              <Content className="homeTxt">
                <Heading>About me</Heading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur deserunt ea eligendi
                  iste laudantium nesciunt odit quaerat, similique! Debitis, ullam!</Paragraph>
                <StyledLink href="#">zobacz więcej</StyledLink>
              </Content>
            </Column>
            <Column>
              <Content className="homeTxt">
                <Heading>Our galleries</Heading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur deserunt ea eligendi
                  iste laudantium nesciunt odit quaerat, similique! Debitis, ullam!</Paragraph>
                <StyledLink href="#">zobacz więcej</StyledLink>
              </Content>
              <ImageWrapper className="homeImg">
                <img src={home2} alt=""/>
              </ImageWrapper>
            </Column>
          </HomeWrapper>
        </ContentWrapper>
      </PageWrapper>

  )
}

export default IndexPage;