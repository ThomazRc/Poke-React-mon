import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProvideProps, IPokeContext, IUserData } from "../interfaces";
import { NamedAPIResource } from "pokenode-ts";

export const PokeContext = createContext({} as IPokeContext);

export const PokeProvider = ({ children }: IProvideProps) => {
  const [pokeList, setPokeList] = useState<NamedAPIResource[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await api.listPokemons(0, 30)

        setPokeList(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemons();
  }, []);

  const userData: IUserData = {
      linkedin: "https://www.linkedin.com/in/thomaz-rosseti-coelho-ti369/",
      gitHub: "https://github.com/ThomazRc",
    };

  return <PokeContext.Provider value={{ pokeList, userData }}>{children}</PokeContext.Provider>;
};
