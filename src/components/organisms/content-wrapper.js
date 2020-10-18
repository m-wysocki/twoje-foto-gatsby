import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';

const StyledContentWrapper = styled.div`
  position: relative;
  width: 67%;
  height: 100%;
  ${({ pageType }) =>
    pageType !== 'homepage' &&
    css`
      padding: 60px 80px;
      overflow: auto;
    `}
  ${({ pageType }) =>
    pageType === 'gallery' &&
    css`
      padding: 30px;
    `}
`;

export const animateContentWrapper = (node, direction) => {
  const contentWrapper = node.getElementsByClassName('contentWrapper');
  const tl = gsap.timeline();

  const opacityStart = direction === 'up' ? 0 : 1;
  const opacityEnd = direction === 'up' ? 1 : 0;

  tl.fromTo(
    contentWrapper[0],
    { autoAlpha: opacityStart },
    { duration: 0.6, autoAlpha: opacityEnd },
  );
};

const ContentWrapper = React.forwardRef(({ children, pageType }, ref) => {
  useEffect(() => {
    animateContentWrapper(document, 'up');
  }, []);

  return (
    <StyledContentWrapper pageType={pageType} ref={ref} className="contentWrapper">
      {children}
    </StyledContentWrapper>
  );
});

export default ContentWrapper;
