import React from "react";

function Fourth() {
  return (
    <div>
      <div className="bg-[url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-US.png)] h-screen w-full bg-cover bg-no-repeat bg-center pt-20 ">
        <div className=" text-center">
          <h1 className="text-[55px] tracking-tight font-bold text-white">
            Model S
          </h1>
          <h4 className="text-[25px] font-extrabold text-white relative tracking-wide leading-6">
            From $68,490
          </h4>
          <h3 className="text-[18px] border-b-[1.5px] leading-8 mx-[630px] font-semibold text-white">
          After Est. Gas Savings $6,500
          </h3>
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
    </div>
  );
}

export default Fourth;