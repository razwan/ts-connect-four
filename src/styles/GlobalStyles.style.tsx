import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Space Grotesk', sans-serif;
}

h1, h2, h3, h4, h5, p, span {
  font-family: 'Space Grotesk', sans-serif;
}

h1, h2, h3, h4, h5 {
  font-weight: 700;
}

h4 {
  font-size: 32px;
  font-weight: 800;
}

.card-label {
  margin: 0 5px 0 0;
  font-weight: 600;
}
`