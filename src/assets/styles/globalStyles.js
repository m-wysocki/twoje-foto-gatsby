import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Maven Pro', sans-serif;
    font-size: 1rem;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Maven Pro', sans-serif;
  }
  
  a{
    text-decoration: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
