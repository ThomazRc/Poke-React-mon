import { NamedAPIResource } from "pokenode-ts";
import React from "react";

export interface IProvideProps {
  children: React.ReactNode;
}

export interface IPokeContext {
  pokeList: NamedAPIResource[];

}

