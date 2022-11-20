import React from "react";
import ProductSlider from "../global/ProductSlider";

const NewProducts = ({ data }) => {
  return (
    <div className="container mx-auto mb-8">
      <h2 className="farsi-text -mb-8">جدیدترین ها</h2>
      <ProductSlider data={data} />
    </div>
  );
};

export default NewProducts;
