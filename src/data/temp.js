// const RELATED_PRODUCTS = gql`
//   query getRelatedProducts($categoryName: String = "") {
//     products(where: { category: $categoryName }) {
//       nodes {
//         ... on SimpleProduct {
//           image {
//             altText
//             sourceUrl
//           }
//           id
//           name
//           price
//           slug
//           productCategories {
//             nodes {
//               name
//               id
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const GET_PRODUCT_BY_SLUG = gql`
//   query getProduct($id: ID!) {
//     product(id: $id, idType: SLUG) {
//       ... on SimpleProduct {
//         databaseId
//         image {
//           altText
//           mediaItemUrl
//           id
//           title
//         }
//         id
//         name
//         price
//         description
//         productCategories {
//           nodes {
//             name
//             id
//           }
//         }
//         attributes {
//           nodes {
//             name
//             options
//           }
//         }
//       }
//       reviews {
//         nodes {
//           author {
//             node {
//               name
//               avatar {
//                 url
//               }
//             }
//           }
//           approved
//           content
//           date
//         }
//         averageRating
//       }
//     }
//   }
// `;

// const getTheProduct = await client.query({
//   query: GET_PRODUCT_BY_SLUG,
//   variables: { id: params.slug },
// });
// const product = getTheProduct?.data?.product;
// const productCategoryName = product.productCategories.nodes[0].name;

// const getRelatedProducts = await client.query({
//   query: RELATED_PRODUCTS,
//   variables: { category: productCategoryName },
// });
// const relatedProducts = getRelatedProducts?.data?.products?.nodes;

// const GET_LATEST_PRODUCTS = gql`
//     query getProducts {
//       products(first: 10) {
//         nodes {
//           ... on SimpleProduct {
//             databaseId
//             id
//             name
//             price
//             slug
//             image {
//               altText
//               sourceUrl
//             }
//           }
//         }
//       }
//     }
//   `;

//   const response = await client.query({
//     query: GET_LATEST_PRODUCTS,
//   });
//   const products = response?.data?.products?.nodes;
