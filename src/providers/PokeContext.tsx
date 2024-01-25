import { createContext, useEffect } from "react";
//import { api } from "../services/api";
import { iProvideProps } from "../interfaces";

export const PokeContext = createContext({});

export const PokeProvider =  ({children}: iProvideProps) => {

    useEffect(() => {
        /*
        const getPokemons = async () => {
            try {
                const {data: allPokemons} = await api.get<>()

            } catch (error) {
                console.error(error);
        }
        }
        */

    }, []);


    return <PokeContext.Provider value={{}}>{children}</PokeContext.Provider>

};

