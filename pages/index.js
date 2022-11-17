import axios from "axios";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import { getProductsData } from "./api/get-products";

import Header from "../src/components/global/Header";
import Baner from "../src/components/home/BanerCarousel";
import Features from "../src/components/home/Features";
import SpecialOffers from "../src/components/home/SpecialOffers";
import Footer from "../src/components/global/Footer";
import Categories from "../src/components/home/Categories";
import NewProducts from "../src/components/home/NewProducts";
import BottomBanners from "../src/components/home/BottomBanners";

export default function Home({ headerFooter, products }) {
  const { header, footer } = headerFooter;

  return (
    <>
      <Header data={header} />
      <Baner />
      <Features />
      <SpecialOffers data={products} />
      <Categories />
      <NewProducts data={products} />
      <BottomBanners />
      <Footer data={footer} />
    </>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await getProductsData(20);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: products || null,
    },

    revalidate: 60,
  };
}
