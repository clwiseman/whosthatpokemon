import React from 'react';
import PokemonApp from "../../components/pokemonApp";
import { randomPokemonImage } from "../../helpers";
import Container from "../../components/container"

const Landing: React.FC = () => <Container>
  <img alt="random pokemon" src={`/pokemons/${randomPokemonImage()}`} />
  <PokemonApp />
</Container>;

export default Landing;
