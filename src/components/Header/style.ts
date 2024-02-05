import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
align-items: center;
flex-direction: column;
border-bottom: 1px solid var(--primary);

nav {
    display: flex;
    flex-direction: column;
    align-items: center;
}




img {
    padding-left: 4.375rem;

}

ul {
    list-style: none;
    font-weight: bold;

}

a {
    text-decoration: none;
    color: var(--primary);

}

a:hover {
    color: var(--secondary);
    transition: 0.4s;

}

@media(min-width: 750px){

    
    nav {
        flex-direction: row;
    }
    
}


`