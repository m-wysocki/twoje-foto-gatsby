import React, {useEffect} from 'react';
import styled, {css} from "styled-components";
import gsap from "gsap";

const StyledContentWrapper = styled.div`
  position: relative;
  width: 67%;
  height: 100%;
  ${({pageType}) => pageType !== 'homepage' && css`
    padding: 60px 80px;
    overflow: auto;
  `}
  ${({pageType}) => pageType === 'gallery' && css`
    padding: 30px;
  `}
`;

export const animateContentWrapper = (node, direction) => {
  const contentWrapper = node.getElementsByClassName("contentWrapper");
  const tl = gsap.timeline();

  if(direction === 'up'){
    tl.fromTo(contentWrapper[0], {autoAlpha: 0}, {duration: 0.6, autoAlpha: 1});
  }else{
    tl.fromTo(contentWrapper[0], {autoAlpha: 1}, {duration: 0.6, autoAlpha: 0});
  }
}

const ContentWrapper = ({children, pageType}, ref) => {

  useEffect(()=>{
    animateContentWrapper(document, 'up');
  }, []);

  return (
      <StyledContentWrapper pageType={pageType} className="contentWrapper">
        {children}
      </StyledContentWrapper>
  );
};

export default ContentWrapper;
