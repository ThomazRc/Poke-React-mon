import styled from "styled-components";

export const ErrorMain = styled.main`
  height: 100vh;
  background-image: url("src/assets/missingNoP.jpg");
  background-size: contain;
  background-position: center;

  section {
    width: 20rem;
    height: 34.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    background-color: var(--primary);
  }

  img {
    width: 300px;
    height: 300px;
    color: var(--primary);
  }

  h2 {
    margin-left: 1.5625rem;
    font-size: 1.25rem;
  }

  @media (min-width: 750px) {
    background-size: auto;

  }

`;
