import Image from "next/image";

const Baner = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex h-[300px] space-x-3">
        <div className="box w-1/4 shadow-sm">Baner 1</div>
        <div className="box w-3/4 shadow-sm">Slider</div>
      </div>
    </div>
  );
};

export default Baner;
