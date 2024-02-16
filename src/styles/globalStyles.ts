import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary: #dec140;
    --secondary: #2110FF;
    
}

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    width: 100vw;
    height: 100vh;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

main {
    width: 100%;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

header {
    height: 12.5rem;

}

footer {
    height: 12.5rem;

}

button {
    cursor: pointer;

}


`;
