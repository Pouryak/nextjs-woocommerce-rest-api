import React from "react";
import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const ProductSlider = ({ data }) => {
  return (
    <div className="justify-center bg-primaryBg my-4 z-10">
      <Swiper
        freeMode={true}
        modules={[Autoplay]}
        className="mySwipper"
        slidesPerView={6}
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 8 },
          480: { slidesPerView: 2, spaceBetween: 8 },
          768: { slidesPerView: 3, spaceBetween: 8 },
          1020: { slidesPerView: 4, spaceBetween: 8 },
          1440: { slidesPerView: 5, spaceBetween: 8 },
        }}
        autoplay={{
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: true,
          delay: 8000,
        }}
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              slug={product.slug}
              id={product.id}
              title={product.name}
              price={product.price}
              imageURL={product.images[0].src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
