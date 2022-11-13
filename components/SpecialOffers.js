import React from "react";
import ProductSlider from "./ProductSlider";

const SpecialOffers = ({ products }) => {
  return (
    <div className="container mx-auto my-8 divider">
      <h2 className="farsi-text">فروش ویژه</h2>
      <ProductSlider products={products} />
    </div>
  );
};

export default SpecialOffers;
