import React from "react";
import Sidebar from "../components/sidebar";
import GlobalStyle from "../assets/styles/globalStyles";
import styled, {ThemeProvider} from 'styled-components';
import { theme } from '../theme/mainTheme';

const SiteWrapper = styled.div`
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ContentWrapper = styled.div`
  position: relative;
  width: 67%;
`;

const MainLayout = ({children}) => (
    <SiteWrapper>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Sidebar/>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </ThemeProvider>
    </SiteWrapper>
);

export default MainLayout;