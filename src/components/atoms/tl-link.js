import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import { animateSidebar } from '../molecules/sidebar';
import { animateContentWrapper } from '../organisms/content-wrapper';

const TlLink = ({ children, to, className }) => {
  return (
    <TransitionLink
      to={to}
      activeClassName="active"
      className={className}
      exit={{
        trigger: ({ node }) => {
          animateSidebar(node, 'down');
          animateContentWrapper(node, 'down');
        },
        length: 0.8,
      }}
      entry={{
        delay: 0.8,
      }}
    >
      {children}
    </TransitionLink>
  );
};

export default TlLink;
