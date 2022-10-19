import { createGlobalStyle } from "styled-components";

import { Normalize } from "./Normalize.style";
import { ColorVariables } from "./ColorVariables.style";
import { Typography } from "./Typography.style";

export const GlobalStyles = createGlobalStyle`
  ${ Normalize }
  ${ ColorVariables }
  ${ Typography }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: grid;
    grid-template-columns: minmax(68px, 1fr) minmax(auto, 1040px) minmax(68px, 1fr);
    grid-template-rows: auto 1fr 100px 50px;
  }

  body {
    background: var(--color-bg-light);
  }

.card-label {
  margin: 0 5px 0 0;
  font-weight: 600;
}
`