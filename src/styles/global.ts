import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --green-dark: #3E9469;
    --green: #4EA97F;
    --green-light: #83C8AA;

    --red-dark: #D23137;
    --red: #E84E49;
    --red-light: #F2C7C8;

    --yellow-dark: #FFCD66;
    --yellow: #FDE6B6;
    --yellow-light: #FEEECB;

    --gray-dark: #262626;
    --gray: #717171;
    --gray-light: #F6F6F6;

    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  body {
    background: var(--gray-light);
    font-family: 'Inter', sans-serif;
  }

  body,
  button,
  input,
  textarea {
    font-family: 'Inter', sans-serif;
  }
`
