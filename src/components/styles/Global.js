import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Epilogue', sans-serif;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.almostWhite};
    }

    button {
        font-family: inherit;
        color: ${({ theme }) => theme.colors.mediumGray};
    }

    li {
        list-style: none;
    }

    a {
        font-size: 1.4rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.mediumGray};
    }

    h1 {
        font-size: 3.4rem;
    }

    p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.mediumGray};;
        line-height: 1.5;
    }

`;

export default GlobalStyles;
