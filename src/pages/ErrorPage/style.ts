import styled from "styled-components";

export const ErrorSection = styled.section`
  width: 20rem;
  height: 34.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 25px;
  background-color: var(--primary);

  .container {
    height: 100vh;
  }


  a {
    width: 9.375rem;
    height: 1.875rem;
    text-decoration: none;
    background-color: blue;
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }

  a:hover {
    background-color: var(--primary);
    color: blue;
    transition: 0.3s;
  }
`;
