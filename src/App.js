import React from "react";
import Router from "./services/router";
import ClientApollo from "./services/apollo";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  return (
    <ApolloProvider client={ClientApollo}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
