import React from "react";
import ProductSlider from "../global/ProductSlider";

const SpecialOffers = ({ data }) => {
  return (
    <div className="container mx-auto my-8 divider">
      <h2 className="farsi-text text-lg -mb-8">فروش ویژه</h2>
      <ProductSlider data={data} />
    </div>
  );
};

export default SpecialOffers;
