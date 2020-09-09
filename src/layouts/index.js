import React from "react";
import Sidebar from "../components/sidebar";
import GlobalStyle from "../assets/styles/globalStyles";
import styled from 'styled-components';

const SiteWrapper = styled.div`
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MainLayout = ({children}) => (
    <SiteWrapper>
      <GlobalStyle />
      <Sidebar />
      {children}
    </SiteWrapper>
);

export default MainLayout;