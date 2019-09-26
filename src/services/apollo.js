import ApolloClient, { InMemoryCache } from "apollo-boost";

const ClientApollo = new ApolloClient({
  uri: "https://api.rebeneficios.ml/graphql",
  cache: new InMemoryCache()
});

export default ClientApollo;
