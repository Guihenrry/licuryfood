import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* inter-regular - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-regular.woff2') format('woff2');
  }
  /* inter-500 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-500.woff2') format('woff2');
  }
  /* inter-700 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-700.woff2') format('woff2');
  }

  :root {
    --color-green-dark: #3E9469;
    --color-green: #4EA97F;
    --color-green-light: #83C8AA;
    --color-red-dark: #D23137;
    --color-red: #E84E49;
    --color-red-light: #F2C7C8;
    --color-yellow-dark: #FFCD66;
    --color-yellow: #FDE6B6;
    --color-yellow-light: #FEEECB;
    --color-gray-dark: #262626;
    --color-gray: #717171;
    --color-gray-light: #F6F6F6;
    --color-white: #FFFFFF;

    --font-body-9: 700 0.5625rem/0.5625rem 'Inter', sans-serif;
    --font-body-12: 400 0.75rem/1rem 'Inter', sans-serif;
    --font-body-12-semibold: 500 0.75rem/1rem 'Inter', sans-serif;
    --font-body-16: 400 1rem/1.5rem 'Inter', sans-serif;
    --font-body-16-semibold: 500 1rem/1.5rem 'Inter', sans-serif;
    --font-body-18: 400 1.125rem/1.5rem 'Inter', sans-serif;
    --font-body-18-semibold: 500 1.125rem/1.5rem 'Inter', sans-serif;

    --font-heading-24: 700 1.5rem/2rem 'Inter', sans-serif;
    --font-heading-32: 700 2rem/2.6rem 'Inter', sans-serif;
    --font-heading-36: 700 2.25rem/3rem 'Inter', sans-serif;

    --border-radius: 0.5rem;

    --shadow-1: 0px 4px 16px rgba(38, 38, 38, 0.05);
    --shadow-2: 0px 4px 20px rgba(38, 38, 38, 0.2);

    --space-1: 1px;
    --space-4: 0.25rem;
    --space-8: 0.5rem;
    --space-12: 0.75rem;
    --space-16: 1rem;
    --space-20: 1.25rem;
    --space-24: 1.5rem;
    --space-32: 2rem;
    --space-48: 3rem;
    --space-56: 3.5rem;
    --space-64: 4rem;
    --space-72: 4.5rem;
    --space-80: 5rem;
    --space-88: 5.5rem;
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
    background: var(--color-gray-light);
  }

  body,
  button,
  input,
  textarea {
    font: var(--font-body-16);
  }
`
