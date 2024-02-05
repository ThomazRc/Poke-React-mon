import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AboutMain } from "./style";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutMain>
        <section>
        <h1>Contando mais sobre o projeto</h1>
        <p>Inserir texto de explicação.</p>
        </section>
      </AboutMain>
      <Footer />
    </>
  );
};
