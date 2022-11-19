import Image from "next/image";

import BottomBanner1 from "../../../public/images/bottom-baner/baner-1.jpg";
import BottomBanner2 from "../../../public/images/bottom-baner/baner-2.jpg";

const BottomBanners = () => {
  return (
    <div className="container mx-auto flex md:flex-row xsm:flex-col xsm:space-x-0 md:space-x-2 xsm:space-y-2 md:space-y-0 mb-6">
      <div>
        <Image
          src={BottomBanner1}
          alt="bottom-baner-1"
          className="rounded-lg"
        />
      </div>
      <div>
        <Image
          src={BottomBanner2}
          alt="bottom-baner-2"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default BottomBanners;
