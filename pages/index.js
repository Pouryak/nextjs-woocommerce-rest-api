import { getProductsData } from "./api/get-products";

import Main from "../src/components/layout/Main";
import Baner from "../src/components/home/TopSlider/Slide";
import Features from "../src/components/home/Features";
import SpecialOffers from "../src/components/home/SpecialOffers";
import Categories from "../src/components/home/Categories";
import NewProducts from "../src/components/home/NewProducts";
import BottomBanners from "../src/components/home/BottomBanners";
import BlogSection from "../src/components/home/BlogSection";

export default function Home({ products }) {
  return (
    <>
      <Main>
        <Baner />
        <Features />
        <SpecialOffers data={products} />
        <Categories />
        <NewProducts data={products} />
        {/* <BlogSection /> */}
        <BottomBanners />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const { data: products } = await getProductsData(20);

  return {
    props: {
      products: products || null,
    },

    revalidate: 60, // every 60s
  };
}
