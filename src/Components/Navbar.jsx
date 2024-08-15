import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { MdLanguage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex justify-between items-center pl-12 py-4 pr-10">
      <div>
        <img
          className="h-3 invert"
          src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAuMWE5LjcgOS43IDAgMCAwIDcgN2gxMWwuNS4xdjI3LjZoNi44VjcuM0wyNiA3aDExYTkuOCA5LjggMCAwIDAgNy03SDB6bTIzOC42IDBoLTYuOHYzNC44SDI2M2E5LjcgOS43IDAgMCAwIDYtNi44aC0zMC4zVjB6bS01Mi4zIDYuOGMzLjYtMSA2LjYtMy44IDcuNC02LjlsLTM4LjEuMXYyMC42aDMxLjF2Ny4yaC0yNC40YTEzLjYgMTMuNiAwIDAgMC04LjcgN2gzOS45di0yMWgtMzEuMnYtN3ptMTE2LjIgMjhoNi43di0xNGgyNC42djE0aDYuN3YtMjFoLTM4ek04NS4zIDdoMjZhOS42IDkuNiAwIDAgMCA3LjEtN0g3OC4zYTkuNiA5LjYgMCAwIDAgNyA3bTAgMTMuOGgyNmE5LjYgOS42IDAgMCAwIDcuMS03SDc4LjNhOS42IDkuNiAwIDAgMCA3IDdtMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN00zMDguNSA3aDI2YTkuNiA5LjYgMCAwIDAgNy03aC00MGE5LjYgOS42IDAgMCAwIDcgNyIvPjwvc3ZnPg=="
          alt="Tesla logo"
        />
      </div>
      <div className=" w-96 text-white text-sm ">
        <ul className="flex justify-between ">
          <li >Vehicles</li>
          <li>Energy</li>
          <li>Charging</li>
          <li>Discover</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="flex  justify-between invert w-24">
        <HiOutlineQuestionMarkCircle size={33} className="hover:bg-black/10 p-1 rounded-md"/>
        <MdLanguage size={33} className="hover:bg-slate-900/10 p-1 rounded-md"/>
        <CgProfile size={33} className="hover:bg-slate-900/10 p-1 rounded-md"/>
      </div>
    </div>
  );
}

export default Navbar;
