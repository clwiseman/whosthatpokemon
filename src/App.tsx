import React from "react";
import { GlobalStyle } from "./globalStyles";
import Header from "./components/header";
import Layout from "./components/layout";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Layout />
    </div>
  );
};

export default App;
