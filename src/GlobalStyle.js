import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        line-height: 1.5;
        font-family: "Circular Std", sans-serif;
        color: ${({theme}) => theme.colors.text.primaryText};
        background: ${({theme}) => theme.colors.background.backgroundWhite};
    }
`;