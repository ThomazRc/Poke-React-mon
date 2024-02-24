import { Link } from "react-router-dom";
import { ErrorSection } from "./style";

export const ErrorPage = () => {
  return (
    <main>
      <ErrorSection>
        <img alt="pokeball-react"/>
        <h2>Opss... Você não capturou o pokemon</h2>
        <Link to={"/"}>Voltar</Link>
      </ErrorSection>
    </main>
  );
};
