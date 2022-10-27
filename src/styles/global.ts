import { em } from "src/helpers/functions";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
        scrollbar-width: thin;
        scrollbar-color: ${(props) => props.theme.colors.bgSecondary} ${(props) => props.theme.colors.bgThird};
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    :focus,
    :active {
        outline: none;
    }

    a:focus,
    a:active {
        outline: none;
    }

    *::selection {
        background-color: ${(props) => props.theme.colors.bgThird};
    }

    *::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    
    *::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.colors.bgSecondary};   
        border-radius: ${(props) => props.theme.borderRad};
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.bgThird};   
    }

    nav,
    footer,
    header,
    aside {
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font-family: inherit;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: 400;
    }

    textarea {
        resize: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
        -webkit-appearance: none;
        margin: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }

    body {
        font-family: "Open Sans", sans-serif;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.bg};
        transition: background-color 0.3s;
    }

    #__next {
        overflow: hidden;
    }

    @media only screen and (min-width: ${em(991.98)}){
        body {
            padding: 0px 0px 0px 130px;
        }
    }

    @font-face {
        font-family: Coolvetica;
        src: url("/fonts/Coolvetica.ttf") format("truetype");
        font-weight: 400;
    }

    @font-face {
        font-family: LaBelleAurore;
        src: url("/fonts/LaBelleAurore.woff2") format("woff2");
        font-weight: 400;
    }
`;
