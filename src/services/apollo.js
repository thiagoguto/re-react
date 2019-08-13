import ApolloClient, { InMemoryCache } from "apollo-boost";

const ClientApollo = new ApolloClient({
  uri: "http://apirdb.dd:8083/graphql",
  cache: new InMemoryCache()
});

export default ClientApollo;
