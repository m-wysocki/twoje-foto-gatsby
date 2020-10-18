import React from 'react';
import Sidebar from '../components/molecules/sidebar';
import { PageWrapperStyled } from '../components/organisms/page-wrapper.styled';

const MainTemplate = ({ children }) => {
  return (
    <PageWrapperStyled>
      <Sidebar />
      {children}
    </PageWrapperStyled>
  );
};

export default MainTemplate;
