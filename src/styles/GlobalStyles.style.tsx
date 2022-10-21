import { createGlobalStyle } from "styled-components";
import { Normalize } from "./Normalize.style";
import { theme } from "./Theme.style";
import { Typography } from "./Typography.style";

export const GlobalStyles = createGlobalStyle`
  ${ Normalize }
  ${ Typography }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: grid;
    grid-template-columns: minmax(20px, 1fr) minmax(auto, 1040px) minmax(20px, 1fr);
    grid-template-rows: auto 1fr 100px 50px;
  }
  
  @media(min-width: 768px) {
    #root {
      grid-template-columns: minmax(68px, 1fr) minmax(auto, 1040px) minmax(68px, 1fr);
    }
  }

  body {
    background: ${theme.colors.lightPurple};
  }

  h1, h2, h3, h4, h5 {
    margin-top: 0;
    margin-bottom: 0;
  }
`