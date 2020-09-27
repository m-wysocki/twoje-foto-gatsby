import React from 'react';
import TransitionLink from "gatsby-plugin-transition-link";
import {animateSidebar} from "./sidebar";
import {animateContentWrapper} from "./content-wrapper";

const TlLink = ({children, to, className }) => {

  return (
      <TransitionLink
          to={to}
          activeClassName="active"
          className={className}
          exit={{
            trigger: ({ node, e, exit, entry }) => {
              animateSidebar(node, 'down');
              animateContentWrapper(node, 'down');
              console.log('exit---' + to);
            },
            length: 0.8
          }}
          entry={{
            trigger: ({ node, e, exit, entry }) => {
              console.log('entry---' + to);
            },
            delay: 0.8
          }}
      >
        {children}
      </TransitionLink>
  );
};

export default TlLink;
