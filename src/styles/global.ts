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

    .notSelected {
        -webkit-touch-callout: none;  /* iPhone OS, Safari */
        -webkit-user-select: none;    /* Chrome, Safari 3 */
        -khtml-user-select: none;     /* Safari 2 */
        -moz-user-select: none;       /* Firefox */
        -ms-user-select: none;        /* IE10+ */
        user-select: none;           
        cursor: default; 
    }
` 

export default GlobalStyle