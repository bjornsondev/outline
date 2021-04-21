import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'OSC-A', Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.palette.cold};
  }

  ul {
    list-style-type: none;
  }

  body {
    background-color: #000000;
  }

  img {
    width: 100%;
  }
`
