import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    text-align: center;
    color: white;
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color:white;
    }
}
#light{
    color: black;
    span {
        color: #23D997;
    }
    button {
        color: black;
    }
    .navme {
        background-color: lightgray;
        a {
            color: black;
        }
    }
}
#dark {
    background-color: #1b1b1b;
        a {
            color: white;
        }
}

h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
    }
    span {
        font-weight: bold;
        color: #23d997;
        
    }
    a {
        font-size: 1.1rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

`

export default GlobalStyle;