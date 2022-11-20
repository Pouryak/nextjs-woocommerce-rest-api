import Image from "next/image";

import Baner1 from "../../../../public/images/slider/1.jpg";
import Baner2 from "../../../../public/images/slider/2.jpg";
import Baner3 from "../../../../public/images/slider/3.jpg";
import Baner4 from "../../../../public/images/slider/4.jpg";
import Baner5 from "../../../../public/images/slider/5.jpg";

export default function Baner() {
  return (
    <div className="container mx-auto my-4">
      <div className="flex lg:h-[440px] md:h-[340px] sm:h-[300px] xsm:h-[220px] space-x-3">
        <div className="box w-3/6 shadow-sm xsm:hidden lg:block mr-2 justify-center items-center text-center">
          <div>
            <a className="font-bold text-xlg text-center">Site Baner</a>
          </div>
        </div>
        {/* Baner */}
        <Image alt="top-baner-1" src={Baner1} className="rounded-lg md:w-3/6" />
      </div>
    </div>
  );
}
