import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import { ThemeProvider } from "next-themes";

import LoadingSpinner from "../components/LoadingSpinner";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        {loading ? <LoadingSpinner /> : null}
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
