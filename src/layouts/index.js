import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/mainTheme'
import GlobalStyle from '../assets/styles/globalStyles'
import { SidebarProvider } from '../context/sidebarContext'

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  </>
)

export default MainLayout
