import { Link } from "react-router-dom";
import { ErrorMain } from "./style";

export const ErrorPage = () => {
  return (
    <ErrorMain>
      <section>
        <Link to={"/"}><img src="src/assets/pokebola-react.png" alt="pokeball-react" /></Link>
        <h2>Opss... Você não capturou o pokemon</h2>
      </section>
    </ErrorMain>
  );
};
