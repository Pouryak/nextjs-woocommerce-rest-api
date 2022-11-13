import React from "react";
import Image from "next/image";

const Baner = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="grid overflow-hidden grid-lines grid-cols-4 grid-rows-2 gap-6 h-[500px]">
        <div className="box row-end-2 col-start-1 col-end-1 overflow-hidden items-center justify-center shadow-sm">
          Baner 1
        </div>
        <div className="box row-start-2 col-start-1 col-end-2 overflow-hidden shadow-sm">
          Baner 2
        </div>
        <div className="box row-span-2 col-start-2 col-span-3 overflow-hidden shadow-sm">
          Slider
        </div>
      </div>
    </div>
  );
};

export default Baner;
