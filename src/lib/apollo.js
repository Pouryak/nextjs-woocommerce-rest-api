// Add Apollo Client to this file
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
//   cache: new InMemoryCache(),
// });

const customFetch = (uri, options) => {
  return fetch(uri, options).then((response) => {
    if (response.status >= 500) {
      // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};
export const client = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
    fetch: customFetch,
  }),
  cache: new InMemoryCache(),
});

// import { ApolloProvider } from "@apollo/client/react";
// import { client } from "../lib/apollo";

// Import top modules in app.js
// Wrapp the entire app with ApolloProvider and pass the client as client ie. client={client}
