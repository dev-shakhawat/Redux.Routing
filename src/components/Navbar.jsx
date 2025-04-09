import React from "react";
import { Link, useLocation } from "react-router";

import ActiveNavIndicator from "./ActiveNavIndicator";

// icons
import { GoHome } from "react-icons/go";
import { CgMenuLeft } from "react-icons/cg";
import { TbDiscountOff } from "react-icons/tb";
import { AiOutlineCalculator } from "react-icons/ai";

export const Navbar = () => {
  const location = useLocation()

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CgMenuLeft className="text-2xl"/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5  "
          >
            <li>
              <Link to={"/"}>
                
                <GoHome className="text-xl" />
                <h2 className="text-base font-medium flex items-center gap-2  ">Home {location.pathname == "/" && <ActiveNavIndicator/>}</h2>
              </Link>
            </li>
            <li>
              <Link to={"/count"}>
              
                <TbDiscountOff className="text-xl" />
                <h2 className="text-base font-medium flex items-center gap-2  ">Count {location.pathname == "/count" && <ActiveNavIndicator/>}</h2>
              </Link>
            </li>
            <li>
              <Link to={"/calculate"}>
              
                <AiOutlineCalculator className="text-xl" />
                <h2 className="text-base font-medium flex items-center gap-2  ">Calculate {location.pathname == "/calculate" && <ActiveNavIndicator/>}</h2>
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Shakhawat</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5   ">
          <li>
            <Link to={"/"}>
              {location.pathname == "/" && <ActiveNavIndicator/>}
              <GoHome className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to={"/count"}  >
            {location.pathname == "/count" && <ActiveNavIndicator/>}
              <TbDiscountOff className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to={"/calculate"}>
            {location.pathname == "/calculate" && <ActiveNavIndicator/>}
              <AiOutlineCalculator className="text-xl" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      
        <button type="button" className="btn"   >Route.Redux</button>
      </div>
    </div>
  );
};
