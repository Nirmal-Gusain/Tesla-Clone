import React from "react";

function Eight() {
  return (
    <div className="bg-[url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-US.png)] h-screen w-full bg-cover bg-no-repeat bg-center pt-20 ">
      <div className=" text-center">
        <h1 className="text-[55px] tracking-tight font-bold text-white">
          Powerwall
        </h1>
        <div className="mt-[490px]">
          <button className="bg-blue-600 text-white rounded-md px-[87px] py-[8px] m-3 text-sm">
            Order Now
          </button>
          <button className="bg-slate-50 rounded-md px-[87px] py-[8px] m-2 text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eight;
