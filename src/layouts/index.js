import React from "react";
import GlobalStyle from "../assets/styles/globalStyles";
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme/mainTheme';
import SimpleReactLightbox from 'simple-react-lightbox'

const MainLayout = ({children}) => (
    <SimpleReactLightbox>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </SimpleReactLightbox>
);

export default MainLayout;