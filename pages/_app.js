import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../src/styles/globals.css";

import { ThemeProvider } from "next-themes";
import LoadingSpinner from "../components/global/LoadingSpinner";

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
    <ThemeProvider attribute="class">
      {loading ? <LoadingSpinner /> : null}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
