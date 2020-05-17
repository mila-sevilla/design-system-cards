import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Trebuchet MS';
    src: url('/assets/trebuchet-ms.woff') format('woff'), url('/assets/trebuchet-ms-regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Trebuchet MS';
    src: url('/assets/trebuchet-ms-bold.ttf') format('truetype');
    font-weight: bold;
  }
  body {
    font-family: 'Trebuchet MS', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
