import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AboutMain } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { useContext } from "react";
import { PokeContext } from "../../providers/PokeContext";

export const AboutPage = () => {
  const { userData } = useContext(PokeContext);

  return (
    <>
      <Header />
      <AboutMain>
        <section>
          <article>
            <h1>Sobre o PokeReactApi</h1>
            <p>
              Bem-vindo ao meu projeto! Aqui, estou explorando a emocionante interseção entre tecnologia e criatividade, enquanto desenvolvo
              um site simples, porém dinâmico, usando React e TypeScript. Meu objetivo é demonstrar como podemos aproveitar ao máximo essas
              ferramentas poderosas para criar experiências web envolventes e funcionais.
              <br />
              Neste projeto, estou utilizando a PokeAPI, uma API gratuita que fornece dados sobre Pokémon. Através do Pokenode.ts, estou
              consumindo esses dados de forma eficiente e criando uma experiência interativa para os usuários. Ao mesmo tempo, estou
              explorando o uso de styled-components para estilização, adicionando uma camada de design elegante e modular ao meu site.
              <br />
              Este é o primeiro de três projetos que estou desenvolvendo. No próximo projeto, planejo explorar uma abordagem semelhante, mas
              usando um framework diferente. Estou animado para compartilhar essa jornada com você e espero que você se divirta explorando o
              mundo dos Pokémon comigo!
            </p>
          </article>
          <article>
            <h1>Sobre Mim</h1>
            <p>
              Meu nome é Thomaz, tenho atualmente 22 anos e sou brasileiro. Sou formado em Análise e Desenvolvimento de Sistemas e
              apaixonado por programação e tecnologia. Meu objetivo com este projeto é desenvolver minhas habilidades de front-end
              utilizando TypeScript com React. Se quiser saber mais sobre mim e meus projetos, ou até mesmo conversar e enviar feedback ou
              sugestões de melhorias, estas são minhas redes sociais. Obrigado pela atenção!
            </p>
          </article>
          <article>
            <Link to={userData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to={userData.gitHub}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </article>
        </section>
      </AboutMain>
      <Footer />
    </>
  );
};
