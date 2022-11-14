import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed w-full h-full loader-spinner justify-center items-center z-50">
      <div class="w-12 h-12 absolute left-[50%] top-[50%] -ml-6 -mt-6 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;
