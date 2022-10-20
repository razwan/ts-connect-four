import { createGlobalStyle } from "styled-components";
import { Normalize } from "./Normalize.style";
import { theme } from "./Theme.style";
import { Typography } from "./Typography.style";
import { Layout } from "./Layout.style";

export const GlobalStyles = createGlobalStyle`
  ${ Normalize }
  ${ Typography }
  ${ Layout }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${theme.colors.lightPurple};
  }

  h1, h2, h3, h4, h5 {
    margin-top: 0;
    margin-bottom: 0;
  }
`