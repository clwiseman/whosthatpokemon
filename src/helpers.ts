/**
 * From an array of objects, return the first object with a specific id value.
 * @param objs
 * @param id
 */
export function find<T extends { id: number }>(
  objs: T[],
  id: number,
): T | null {
  const found = objs.filter(item => item.id === id);
  return found.length > 0 ? found[0] : null;
}

export function randomPokemon(): number {
  return Math.floor(Math.random() * (809 - 1 + 1)) + 1;
}

/**
 * Returns the zero-padded string of the Pokedex ID.
 * @param pokedexId
 */
export function imageFileName(pokedexId: number) {
  return pokedexId.toString().padStart(3, '0');
}