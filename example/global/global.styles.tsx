import { createGlobalStyle } from "styled-components";
import { darkThemeProps, lightThemeProps } from "./theme.styles";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${lightThemeProps}

    @media (prefers-color-scheme: dark) {
        ${darkThemeProps}
    }

    font-size: 17px;

    @media (max-width: 900px) {
      font-size: 15px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }

  body {
    margin: 0;
    background: var(--background);
  }
`