import axios from "axios";
import { getProductsData } from "./api/get-products";
import {
  HEADER_FOOTER_ENDPOINT,
  GET_PRODUCTS_ENDPOINT,
} from "../utils/constants/endpoints";

import Header from "../components/Header";
import Baner from "../components/BanerCarousel";
import Features from "../components/Features";
import SpecialOffers from "../components/SpecialOffers";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import NewProducts from "../components/NewProducts";
import BottomBanners from "../components/BottomBanners";

export default function Home({ headerFooter, newProducts }) {
  const { header, footer } = headerFooter;

  return (
    <>
      <Header data={header} />
      <Baner />
      <Features />
      {/* <SpecialOffers /> */}
      <Categories />
      <NewProducts data={newProducts} />
      <BottomBanners />
      <Footer data={footer} />
    </>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: newProducts } = await getProductsData(20); // lastest 20 products

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      newProducts: newProducts ?? {},
    },

    revalidate: 10,
  };
}
