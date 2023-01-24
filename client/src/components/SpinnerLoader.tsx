import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="w-[80px] h-[80px] rounded-[50%] border-t-purple-600  border-[5px] animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
