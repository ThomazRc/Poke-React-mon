import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid var(--primary);

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 18.75rem;
  }

  img {
    padding-right: 1rem;
  }

  ul {
    list-style: none;
    font-weight: bold;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }

  a:hover {
    color: var(--secondary);
    transition: 0.4s;
  }

  @media (min-width: 750px) {
    nav {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
