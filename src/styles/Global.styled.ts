import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    // outline: none;
  }

  a:focus,
  a:active {
    // outline: none;
  }

  html,
  body {
    height: 100%;
  }

  body {
    color: ${({theme})=>theme.colors.text};
    line-height: 1;
    font-family: 'Roboto', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button,
  textarea {
    font-family: 'Roboto', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
`