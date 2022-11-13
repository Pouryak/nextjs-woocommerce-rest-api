import React from "react";

import { Cats } from "../data/cats";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="container mx-auto mb-8 divider pb-8">
      <h2 className="farsi-text">دسته بندی ها</h2>
      <div className="flex justify-center px-12 space-x-10 p-8">
        {Cats.map((cat) => (
          <CategoryItem
            key={cat.id}
            id={cat.id}
            title={cat.title}
            image={cat.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
