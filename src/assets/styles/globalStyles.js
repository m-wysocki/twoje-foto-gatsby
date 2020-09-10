import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Roboto';
  }
  
  h1,h2,h3,h4,h5{
    font-family: 'Maven Pro';
  }
  
  p {
    font-size: 16px;
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
