import React from "react";

import { Cats } from "../../data/cats";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="container mx-auto my-10 divider pb-8">
      <h2 className="farsi-text text-lg">دسته بندی ها</h2>
      <div className="grid mt-6 justify-center md:grid-cols-3 md:grid-rows-2 xsm:grid-cols-2 xsm:gap-y-12 xsm:grid-rows-3 xsm:gap-6 md:gap-8 md:gap-y-14 xsm:flex-col">
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
