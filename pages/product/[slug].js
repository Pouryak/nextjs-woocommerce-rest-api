import React from "react";
import axios from "axios";
import Header from "../../components/Header";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import { HEADER_FOOTER_ENDPOINT } from "../../utils/constants/endpoints";

import SingleProductCard from "../../components/Product/SingleProductCard";
import Productslider from "../../components/ProductSlider";
import Footer from "../../components/Footer";
import Details from "../../components/Product/Details";

const SingleProduct = ({ headerFooter, product, relatedProducts }) => {
  const { header, footer } = headerFooter;
  const productAttributes = product.attributes.nodes;
  const productDescription = product.description;
  const productComments = product.reviews;

  return (
    <>
      <Header data={header} />
      {/* Main Container */}
      <div className="container mx-auto">
        <SingleProductCard data={product} />
        <Details
          details={productAttributes}
          description={productDescription}
          comments={productComments}
        />
        {/* Related Products */}
        <div className="mt-6">
          <h2 className="farsi-text">محصولات مشابه</h2>
          <Productslider data={relatedProducts} />
        </div>
      </div>
      <Footer data={footer} />
    </>
  );
};

export default SingleProduct;

export async function getStaticProps({ params }) {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const RELATED_PRODUCTS = gql`
    query getRelatedProducts($categoryName: String = "") {
      products(where: { category: $categoryName }) {
        nodes {
          ... on SimpleProduct {
            image {
              altText
              sourceUrl
            }
            id
            name
            price
            slug
            productCategories {
              nodes {
                name
                id
              }
            }
          }
        }
      }
    }
  `;

  const GET_PRODUCT_BY_SLUG = gql`
    query getProduct($id: ID!) {
      product(id: $id, idType: SLUG) {
        ... on SimpleProduct {
          image {
            altText
            mediaItemUrl
            id
            title
          }
          id
          name
          price
          description
          productCategories {
            nodes {
              name
              id
            }
          }
          attributes {
            nodes {
              name
              options
            }
          }
        }
        reviews {
          nodes {
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            approved
            content
            date
          }
          averageRating
        }
      }
    }
  `;

  const getTheProduct = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { id: params.slug },
  });
  const product = getTheProduct?.data?.product;
  const productCategoryName = product.productCategories.nodes[0].name;

  // console.log("category name: ", productCategoryName);

  const getRelatedProducts = await client.query({
    query: RELATED_PRODUCTS,
    variables: { category: productCategoryName },
  });
  const relatedProducts = getRelatedProducts?.data?.products?.nodes;

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      product,
      relatedProducts: relatedProducts || null,
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
