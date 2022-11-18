import Head from "next/head";

import axios from "axios";
import { getProduct } from "../api/get-products";

import Main from "../../src/components/layout/Main";
import SingleProductCard from "../../src/components/product/SingleProductCard";
import Productslider from "../../src/components/global/ProductSlider";
import Details from "../../src/components/product/Details";

const SingleProduct = ({ product, relatedProducts }) => {
  const productAttributes = product[0].attributes;
  const productDescription = product[0].description;
  const productComments = product[0].reviews;

  return (
    <>
      <Head>
        <title>Next WooCommerce - {product[0].name}</title>
      </Head>
      <Main>
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
      </Main>
    </>
  );
};

export default SingleProduct;

export async function getStaticProps({ params }) {
  const { data: product } = await getProduct(params.slug);

  return {
    props: {
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
