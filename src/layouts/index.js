import React from "react";
import GlobalStyle from "../assets/styles/globalStyles";
import styled, {ThemeProvider} from 'styled-components';
import {theme} from '../theme/mainTheme';
import SimpleReactLightbox from 'simple-react-lightbox'

const SiteWrapper = styled.div`
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MainLayout = ({children}) => (
    <SimpleReactLightbox>
      <SiteWrapper>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </SiteWrapper>
    </SimpleReactLightbox>
);

export default MainLayout;