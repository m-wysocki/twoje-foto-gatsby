import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import TlLink from './tl-link';
import { Heading } from './heading';

const Frame = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colorExtra};
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  margin-left: 2rem;
  opacity: 0.6;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  ${({ theme }) => theme.mqxs} {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  &::before {
    content: '';
    display: block;
    width: calc(100% - 1.5rem);
    height: calc(100% - 1.5rem);
    position: relative;
    top: 0.7rem;
    left: 0.7rem;
    background-color: #fff;
    ${({ theme }) => theme.mqxs} {
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
      top: 0.5rem;
      left: 0.5rem;
    }
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  position: relative;
  width: auto;
  display: inline-block;
  &::before {
    content: '';
    width: 100%;
    height: 40%;
    background-color: ${({ theme }) => theme.colorTextLight};
    opacity: 0.4;
    position: absolute;
    bottom: 0;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Gallery = styled(TlLink)`
  &:nth-child(odd) {
    grid-column: 1/4;
    ${({ theme }) => theme.mqsm} {
      grid-column: 1/5;
    }
    ${({ theme }) => theme.mqxs} {
      grid-column: auto;
    }
  }
  &:nth-child(even) {
    grid-column: 3/6;
    ${({ theme }) => theme.mqsm} {
      grid-column: 2/6;
    }
    ${({ theme }) => theme.mqxs} {
      grid-column: auto;
    }

    ${Frame} {
      margin-left: -2rem;
      ${({ theme }) => theme.mqxs} {
        margin-left: -1rem;
      }
    }
  }
  &:hover {
    &:nth-child(even) {
      ${Frame} {
        transform: translate(0.7rem, -0.7rem);
      }
    }
    &:nth-child(odd) {
      ${Frame} {
        transform: translate(-0.7rem, -0.7rem);
        opacity: 1;
      }
    }

    ${StyledHeading} {
      &::before {
        transform: scaleY(1);
      }
    }
  }
`;

const GalleryCard = ({ gallery, className }) => {
  return (
    <Gallery key={gallery.id} to={`/galeria/${gallery.slug}`} className={className}>
      <StyledHeading small>{gallery.name}</StyledHeading>
      <ImageWrapper>
        <Frame />
        <Image fluid={gallery.cover_image.localFile.childImageSharp.fluid} />
      </ImageWrapper>
    </Gallery>
  );
};

export default GalleryCard;
