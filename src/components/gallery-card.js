import React from 'react';
import {Link} from "gatsby";
import Image from "gatsby-image";
import styled from 'styled-components';
import {Heading} from "./heading";

const Frame = styled.div`
  display: block;
  background-color: ${({theme}) => theme.colorExtra};
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-left: 30px;
  opacity: 0.6;
  transition: transform .3s ease-in-out, opacity .3s ease-in-out;
  &::before{
    content: '';
    display: block;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    position: relative;
    top: 10px;
    left: 10px;
    background-color: #fff;
  }
`;


const StyledHeading = styled(Heading)`
  text-align: center;
  position: relative;
  width: auto;
  display: inline-block;
  &::before{
    content: '';
    width: 100%;
    height: 40%;
    background-color: ${({theme}) => theme.colorTextLight};
    opacity: 0.4; 
    position: absolute;
    bottom: 0;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: bottom; 
    transition: transform .3s ease-in-out;
  }
`;

const ImageWrapper = styled.div`
    position: relative;
`;

const Gallery = styled(Link)`
  &:nth-child(odd){
    grid-column: 1/4;
  }
  &:nth-child(even){
    grid-column: 3/6;
    ${Frame}{
      margin-left: -30px;
    } 
  }
  &:hover{
    &:nth-child(even){
      ${Frame}{
        transform: translate(10px, -10px); 
      }
    }
    &:nth-child(odd){
      ${Frame}{
        transform: translate(-10px, -10px);
        opacity: 1;
      }
    }
    
    ${StyledHeading}{
      &::before{
        transform: scaleY(1);
      }
    }
  }
`;

const GalleryCard = ({gallery}) => {
  return (
      <Gallery key={gallery.id} to={`/galeria/${gallery.slug}`}>
        <StyledHeading small>
          {gallery.name}
        </StyledHeading>
        <ImageWrapper>
          <Frame />
          <Image fluid={gallery.cover_image.localFile.childImageSharp.fluid}/>
        </ImageWrapper>
      </Gallery>
  );
};

export default GalleryCard;
