import React from "react";
import styled from 'styled-components';
import home2 from '../assets/images/home2.jpg';
import {StyledLink} from "../components/styled-link";
import {Paragraph} from "../components/paragraph";
import {Heading} from "../components/heading";

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

const IndexPage = () => (
    <HomeWrapper>
      <Column>
        <ImageWrapper>
          <img src={home2} alt=""/>
        </ImageWrapper>
        <Content>
          <Heading>About me</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur deserunt ea eligendi
            iste laudantium nesciunt odit quaerat, similique! Debitis, ullam!</Paragraph>
          <StyledLink href="#">zobacz więcej</StyledLink>
        </Content>
      </Column>
      <Column>
        <Content>
          <Heading>Our galleries</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur deserunt ea eligendi
            iste laudantium nesciunt odit quaerat, similique! Debitis, ullam!</Paragraph>
          <StyledLink href="#">zobacz więcej</StyledLink>
        </Content>
        <ImageWrapper>
          <img src={home2} alt=""/>
        </ImageWrapper>
      </Column>
    </HomeWrapper>
)

export default IndexPage;