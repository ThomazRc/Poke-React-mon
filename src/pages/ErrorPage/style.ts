import styled from "styled-components";

export const ErrorMain = styled.main`
  height: 100vh;
  background-image: url("../../assets/missingNo.jpg");
  background-size: cover;

  section {
    width: 20rem;
    height: 34.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 25px;
    background-color: var(--primary);
  }

  h2 {
    margin-left: 1.5625rem;
    font-size: 1.25rem;
  }

  a {
    width: 9.375rem;
    height: 1.875rem;
    text-decoration: none;
    background-color: #def;
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }

  a:hover {
    background-color: var(--primary);
    color: #def;
    transition: 0.3s;
  }
`;
