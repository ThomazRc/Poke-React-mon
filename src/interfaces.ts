import React from "react";

export interface IProvideProps {
  children: React.ReactNode;
}

export interface IPokeContext {
  pokeList: IGetPokemon[];
  
}

export interface IGetPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;

}
