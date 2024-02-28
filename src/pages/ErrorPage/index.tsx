import { Link } from "react-router-dom";
import { ErrorMain } from "./style";

export const ErrorPage = () => {
  return (
    <ErrorMain>
      <section>
        <img src="../../assets/pokebola-react.jfif" alt="pokeball-react" />
        <h2>Opss... Você não capturou o pokemon</h2>
        <Link to={"/"}>Voltar</Link>
      </section>
    </ErrorMain>
  );
};
