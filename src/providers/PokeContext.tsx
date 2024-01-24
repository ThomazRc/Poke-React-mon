import React, { createContext } from "react";

export interface iProvideProps {
    children: React.ReactNode;
}

export const PokeContext = createContext({});

export const PokeProvider =  ({children}: iProvideProps) => {


    return <PokeContext.Provider value={{}}>{children}</PokeContext.Provider>

};

