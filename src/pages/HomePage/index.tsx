import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PokeContext } from "../../providers/PokeContext";

export const HomePage = () => {
  const { pokeList } = useContext(PokeContext);

  return (
    <>
      <Header />
      <main>
        <section>
          <ul>
            {pokeList.map((poke) => (
              <li>{poke.name}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
