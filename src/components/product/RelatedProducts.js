import ProductSlider from "../global/ProductSlider";

const RelatedProducts = ({ data }) => {
  // If there's less than 6 related products return
  if (data.length < 6) return;

  return (
    <div className="mt-6">
      <h2 className="farsi-text">محصولات مشابه</h2>
      <ProductSlider data={data} />
    </div>
  );
};

export default RelatedProducts;
