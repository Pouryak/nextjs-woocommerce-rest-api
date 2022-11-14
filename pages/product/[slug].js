import React from "react";
import axios from "axios";
import Header from "../../components/Header";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import {
  HEADER_FOOTER_ENDPOINT,
  GET_PRODUCTS_ENDPOINT,
} from "../../utils/constants/endpoints";

import SingleProductCard from "../../components/Product/SingleProductCard";
import Productslider from "../../components/ProductSlider";
import Footer from "../../components/Footer";
import Details from "../../components/Product/Details";

const SingleProduct = ({ headerFooter, product }) => {
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
          {/* <Productslider /> */}
        </div>
      </div>
      <Footer data={footer} />
    </>
  );
};

export default SingleProduct;

export async function getStaticProps({ params }) {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
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
  const response = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { id: params.slug },
  });
  const product = response?.data?.product;
  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      product,
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
