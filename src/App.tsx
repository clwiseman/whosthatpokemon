import React from "react";
import { ThemeProvider } from "styled-components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import PokemonApp from "./components/pokemonApp";
import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";

const client = new ApolloClient({
  uri: 'https://whos-that-pokemon-api.herokuapp.com/v1/graphql',
  headers: {
    'X-Hasura-Admin-Secret': process.env.REACT_APP_HASURA_SECRET,
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Header />
      <PokemonApp />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
