import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --red:#EF233C;
        --green:#04E762;
        --white:#fff;
        --black:#293241;
        --orange:#F8961E;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif; 
        background: var(--white-green);
        color: var(--black);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
        padding: 0;
        margin: 0;
    }
` 

export default GlobalStyle