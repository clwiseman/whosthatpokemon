import React from "react";
import { ThemeProvider } from "styled-components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Lobby from "./pages/lobby";
import Landing from "./pages/landing";

import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";
import Footer from "./components/footer";

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
        <Switch>
          <Route path="/session/:joinID">
            <Lobby />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </ApolloProvider>
    </Router>
  </ThemeProvider>
);

export default App;
