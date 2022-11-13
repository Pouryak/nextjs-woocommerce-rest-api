import React from "react";
import ProductSlider from "./ProductSlider";

const NewProducts = ({ data }) => {
  return (
    <div className="container mx-auto mb-8">
      <h2 className="farsi-text">جدیدترین ها</h2>
      <ProductSlider data={data} />
    </div>
  );
};

export default NewProducts;
