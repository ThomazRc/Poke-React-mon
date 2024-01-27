import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProvideProps } from "../interfaces";

export const PokeContext = createContext({});

export const PokeProvider =  ({children}: IProvideProps) => {
    const [pokeList, setPokeList] = useState([]);


    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await api.get("");

                setPokeList(response.data);

            } catch (error) {
                console.error(error);
        }
        }
        getPokemons();
    }, []);


    return <PokeContext.Provider value={{pokeList}}>{children}</PokeContext.Provider>

};

