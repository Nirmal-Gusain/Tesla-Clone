import React from "react";
import Navbar from "./Navbar";

function First() {
  return (
    <div className="bg-[url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png)] h-screen w-full bg-cover bg-no-repeat bg-center ">
      <Navbar />
      <div className=" text-center">
        <h1 className="text-[55px] tracking-tight font-bold text-white">
          Model 3
        </h1>
        <h3 className="text-[26px] border-b-[1.5px] leading-8 mx-[520px] font-semibold text-white">
          1.99% APR Financing Ending August 31
        </h3>
        <h4 className="text-[16px] font-extrabold text-white relative tracking-wider">
          From $34,990
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

export default First;
