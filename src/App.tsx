import React from "react";
import { ThemeProvider } from "styled-components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PokemonApp from "./components/pokemonApp";
import Lobby from "./pages/lobby";
import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";
import { randomPokemonImage } from "./helpers";

const client = new ApolloClient({
  uri: 'https://whos-that-pokemon-api.herokuapp.com/v1/graphql',
  headers: {
    'X-Hasura-Admin-Secret': process.env.REACT_APP_HASURA_SECRET,
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Header />
        <img alt="random pokemon" src={`/pokemons/${randomPokemonImage()}`}/>
        <PokemonApp />
        <Switch>
          <Route path="/session/:joinID">
            <Lobby />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  </ThemeProvider>
);

export default App;
