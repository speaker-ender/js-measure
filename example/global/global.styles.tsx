import { createGlobalStyle } from "styled-components";
import { darkThemeProps, lightThemeProps } from "./theme.styles";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${lightThemeProps}

    @media (prefers-color-scheme: dark) {
        ${darkThemeProps}
    }
  }

  body {
    margin: 0;
    background: var(--background);
  }
`