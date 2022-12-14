const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export const getProductsData = async (perPage) => {
  return await api.get("products", {
    per_page: perPage || 50,
  });
};

export const getProduct = async (slug) => {
  return await api.get(`products/?slug=${slug}`, {});
};

export const getProductsByCategory = async (id) => {
  return await api.get(`products/?categories=${id}`, {});
};
