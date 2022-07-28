import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%; /*10px */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    background-color: #18181b;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  li {
    color: #ffffff;
  }
`;