import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import 'antd/dist/antd.css';

const globals = css`
  :root {
    --text-color: rgba(0, 0, 0, 0.85);
    --white: #ffffff;
    --red: #ec0000;
    --dark-red: #c50f0f;
    --dark-gray: #34353a;
    --black: #000000;
    --light-silver: #f8f7f6;
    --silver: #ebeae9;
    --dark-silver: #dbdbdb;
    --light-brown: #cdc8be;
    --brown: #887f6f;
    --golden: #ffbe00;
    --dark-golden: #de9e11;
    --orange: #ff8200;
    --green: #8dc73f;
    --colbat: #006edc;
    --light-blue: #2582af;
    --blue: #126a97;
    --steel-blue: #11628d;
    --dark-blue: #215571;
  }

  body,
  html {
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
    font-family: 'Ikano';
    font-family: var(--main-font);
    font-size: 62.5%;
    font-weight: 400;
    height: 100%;
    line-height: 1.4;
    margin-left: auto;
    margin-right: auto;
    min-width: 320px;
    width: 100%;
  }

  div {
    &[data-disabled='true'] {
      opacity: 0.2;
    }
  }

  #root {
    min-height: 100vh;
    height: 100%;
  }

  section {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--main-font);
    color: var(--text-color);
  }

  p {
    font-family: var(--main-font);
  }

  button {
    border: 0;
  }

  input {
    border: 0;
  }

  a {
    border: 0;
    color: var(--blue);
    text-decoration: none;
    transition: 0.2s;
  }

  a:visited,
  a:focus,
  a:active,
  a:hover {
    outline: 0 none;
  }

  img {
    border: 0;
  }

  menu,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  input {
    background-color: transparent;
    line-height: 54px;
    padding: 0 12px;
    width: 100%;
  }
`;

export const Styles = createGlobalStyle`
  ${normalize}
  ${globals}
`;
