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

/**
 * Returns a random Pokedex ID based on the generation.
 * Defaults to Gen 1.
 * @param generation number 1 - 7
 */
export function randomPokemon(generation: number = 1): number {
  let min = 0;
  let max = 0;

  switch (generation) {
    case 1:
      min = 1;
      max = 151;
      break;
    case 2:
      min = 152;
      max = 251;
      break;
    case 3:
      min = 252;
      max = 386;
      break;
    case 4:
      min = 387;
      max = 493;
      break;
    case 5:
      min = 494;
      max = 649;
      break;
    case 6:
      min = 650;
      max = 721;
      break;
    case 7:
      min = 722;
      max = 809;
      break;
    default:
      min = 1;
      max = 151;
      break;
  }

  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns the zero-padded string of the Pokedex ID.
 * @param pokedexId
 */
export function imageFileName(pokedexId: number) {
  return pokedexId.toString().padStart(3, '0');
}