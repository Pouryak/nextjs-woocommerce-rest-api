import Header from "../global/Header";
import Footer from "../global/Footer";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
