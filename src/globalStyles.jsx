import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 20px 60px;
    font-family: 'Open Sans Condensed', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing:border-box;
}

`