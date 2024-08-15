import React from "react";

function Second() {
  return (
    <div className="bg-[url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-US-v2.png)] h-screen w-full bg-cover bg-no-repeat bg-center pt-16 ">
      <div className=" text-center">
        <h1 className="text-[55px] tracking-tight font-bold text-white">
          Model Y
        </h1>
        <h3 className="text-[26px] border-b-[1.5px] leading-8 mx-[520px] font-semibold text-white">
          1.99% APR Financing Ending August 31
        </h3>
        <h4 className="text-[16px] font-extrabold text-white relative tracking-wider">
          From $31,490
        </h4>
        <div className="mt-[440px]">
          <button className="bg-blue-600 text-white rounded-md px-[87px] py-[8px] m-3 text-sm">
            Order Now
          </button>
          <button className="bg-slate-50 rounded-md px-[87px] py-[8px] m-2 text-sm">
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  );
}

export default Second;
