import styled from "styled-components";

export const AboutSection = styled.section`
  width: 80%;
  margin: auto;


  .article-about {
    height: 34.125rem;
    margin: 1rem;
    padding: 1rem;
  }

  .article-profile {
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .article-links {
    width: 100px;
    display: flex;
    justify-content: space-evenly;
  }

  .linkedin-logo {
    color: #0077b5;
  }

  .gitHub-logo {
    color: #000;
  }

  h1 {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 750px) {
    .article-about {
      height: 16rem;
      margin: 1rem;
      padding: 1rem;
    }
  }
`;
