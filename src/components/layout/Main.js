import Head from "next/head";
import Header from "../global/Header";
import Footer from "../global/Footer";
import NewHeader from "../global/newHeader";

const Main = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next WooCom's homepage" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <title>Next WooCommerce</title>
      </Head>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
