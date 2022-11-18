import React from "react";
import axios from "axios";
import { getProduct } from "../api/get-products";
import Header from "../../src/components/global/Header";
import { HEADER_FOOTER_ENDPOINT } from "../../src/utils/constants/endpoints";

import SingleProductCard from "../../src/components/product/SingleProductCard";
import Productslider from "../../src/components/global/ProductSlider";
import Footer from "../../src/components/global/Footer";
import Details from "../../src/components/product/Details";

const SingleProduct = ({ headerFooter, product, relatedProducts }) => {
  const { header, footer } = headerFooter;
  const productAttributes = product[0].attributes;
  const productDescription = product[0].description;
  const productComments = product[0].reviews;

  return (
    <>
      <Header data={header} />
      {/* Main Container */}
      <div className="container mx-auto">
        <SingleProductCard data={product[0]} />
        <Details
          details={productAttributes}
          description={productDescription}
          comments={productComments}
        />
        {/* Related Products */}
        <div className="mt-6">
          <h2 className="farsi-text">محصولات مشابه</h2>
          {/* <Productslider data={relatedProducts} /> */}
        </div>
      </div>
      <Footer data={footer} />
    </>
  );
};

export default SingleProduct;

export async function getStaticProps({ params }) {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: product } = await getProduct(params.slug);
  // const { data: productByCat } = await getProductsByCategory(product[0].id);

  // console.log(productByCat);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      product,
      // relatedProducts: relatedProducts || null,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
