import styled from "styled-components";

export const ErrorSection = styled.section`
  width: 15rem;
  height: 34.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 25px;
  align-items: center;
  background-color: gray;


  a {
    width: 9.375rem;
    height: 1.875rem;
    text-decoration: none;
    background-color: blue;
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;

  }

  a:hover {
    background-color: gold;
    color: blue;
    transition: 0.5s;
    
  }


`;