import Head from "next/head";

import { getProductBySlug, getProductsByCategory } from "../api/get-products";

import Main from "../../src/components/layout/Main";
import ProductPageCard from "../../src/components/product/ProductPageCard";
import Details from "../../src/components/product/Details";
import RelatedProducts from "../../src/components/product/RelatedProducts";

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
          <ProductPageCard data={product[0]} />
          <Details
            details={productAttributes}
            description={productDescription}
            comments={productComments}
          />
          <RelatedProducts data={relatedProducts} />
        </div>
      </Main>
    </>
  );
};

export default SingleProduct;

export async function getServerSideProps({ params }) {
  const { data: product } = await getProductBySlug(params.slug);
  const categories = product[0].categories;
  const { data: relatedProducts } = await getProductsByCategory(categories);

  return {
    props: {
      product,
      relatedProducts,
    },
  };
}
