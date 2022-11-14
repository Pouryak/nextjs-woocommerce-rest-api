import axios from "axios";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import { HEADER_FOOTER_ENDPOINT } from "../utils/constants/endpoints";

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
      <SpecialOffers data={newProducts} />
      <Categories />
      <NewProducts data={newProducts} />
      <BottomBanners />
      <Footer data={footer} />
    </>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);

  const GET_LATEST_PRODUCTS = gql`
    query getProducts {
      products(first: 10) {
        nodes {
          ... on SimpleProduct {
            id
            name
            price
            slug
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_LATEST_PRODUCTS,
  });
  const products = response?.data?.products?.nodes;

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      newProducts: products ?? {},
    },

    revalidate: 10,
  };
}
