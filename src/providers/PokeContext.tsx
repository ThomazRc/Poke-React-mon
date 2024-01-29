import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IGetPokemon, IProvideProps, IPokeContext } from "../interfaces";

export const PokeContext = createContext({} as IPokeContext);

export const PokeProvider = ({ children }: IProvideProps) => {
  const [pokeList, setPokeList] = useState<IGetPokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await api.get<IGetPokemon[]>('');

        setPokeList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemons();
  }, []);

  return <PokeContext.Provider value={{ pokeList }}>{children}</PokeContext.Provider>;
};
