/**
 * From an array of objects, return the first object with a specific id value.
 * @param objs
 * @param id
 */
import {Pokemon} from "./types/graphql-types";

export function find<T extends { id: number }>(
  objs: T[],
  id: number,
): T | null {
  const found = objs.filter(item => item.id === id);
  return found.length > 0 ? found[0] : null;
}

/**
 * Returns a random Pokedex based on the list of pokémons given.
 * @param pokemons Pokemon[] List of pokémons to get random from
 */
export function randomPokemon(pokemons: Pokemon[]): Pokemon {
  return pokemons[Math.floor(Math.random() * pokemons.length)];
}

/**
 * Returns the zero-padded string of the Pokedex ID.
 * @param pokedexId
 */
export function imageFileName(pokedexId: number) {
  return `${pokedexId.toString().padStart(3, '0')}.png`;
}
