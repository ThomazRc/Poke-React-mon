import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AboutMain } from "./style";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutMain>
        <section>
          <article>
            <h1>Sobre o PokeReactApi</h1>
            <p>Inserir texto de explicação.</p>
          </article>
          <article>
            <h1>Sobre Mim...</h1>
            <p>Falando sobre mim</p>
          </article>
        </section>
      </AboutMain>
      <Footer />
    </>
  );
};
