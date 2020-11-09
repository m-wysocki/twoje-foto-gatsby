import React from 'react';
import Sidebar from '../components/molecules/sidebar';
import { PageWrapperStyled } from '../components/styled/page-wrapper.styled';
import Footer from '../components/molecules/footer';

const MainTemplate = ({ children }) => {
  return (
    <PageWrapperStyled>
      <Sidebar />
      {children}
      <Footer />
    </PageWrapperStyled>
  );
};

export default MainTemplate;
