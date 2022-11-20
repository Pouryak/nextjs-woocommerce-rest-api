import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../src/styles/globals.css";
import { ThemeProvider } from "next-themes";

import { CartContextProvider } from "../src/components/context/cart-context";
import LoadingSpinner from "../src/components/global/LoadingSpinner";

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
    <CartContextProvider>
      <ThemeProvider attribute="class">
        {loading ? <LoadingSpinner /> : null}
        <Component {...pageProps} />
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default MyApp;
