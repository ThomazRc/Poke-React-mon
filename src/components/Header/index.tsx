import { Link, useLocation } from "react-router-dom";
import { StyledHeader } from "./style";

export const Header = () => {
  const location = useLocation();

  const linkTo = location.pathname === "/about" ? "/" : "/about";
  const linkText = location.pathname === "/about" ? "Home" : "About";
  
  return (
    <StyledHeader>
      <nav>
      <img src="/src/assets/pokeapi-removebg-preview.png" alt="Logo PokeReactApi"/>
      <ul>
        <li><Link to={linkTo}>{linkText}</Link></li>
      </ul>
    </nav>
    </StyledHeader>
  );
};
