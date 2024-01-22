import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
      <img src="/src/assets/pokeapi-removebg-preview.png" alt="Logo PokeReactApi"/>
      <ul>
        <li><Link to={"/about"}>About</Link></li>
      </ul>
    </nav>
    </StyledHeader>
  );
};
