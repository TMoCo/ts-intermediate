export default interface Swapi {
  name: string;
  films: string[];
  url: string;
}

export interface Paginated<T extends Swapi> {
  count: number;
  results: Array<T>;
}

export interface Planet extends Swapi {
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
}

export interface People extends Swapi {
  height: number;
  mass: number;
  birth_year: string;
  gender: string;
}

export interface Species extends Swapi {
  language: string;
  classification: string;
  designation: string;
  average_lifespan: number;
  average_height: number;
}

export const swapiBaseUrl = 'https://swapi.dev/api/';

// an object whose keys we can iterate over to check if a query is valid
export enum Queries {
  planets,
  people,
  species,
}

// interface is mapping of enum categories to a type for generic fetch data
export interface Categories {
  planets: Planet;
  people: People;
  species: Species;
}

export type categoryKeys = keyof Categories;
export type categories = Categories[keyof Categories];
