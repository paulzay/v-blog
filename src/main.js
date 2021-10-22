import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { setContext } from "apollo-link-context";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem("blog-app-token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: "http://localhost:3333/graphql",
});

// create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// install the vue plugin

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

createApp(App, { apolloProvider })
  .use(store)
  .use(router)
  .use(VueApollo)
  .mount("#app");
