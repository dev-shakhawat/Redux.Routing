import React from "react";

// icons
import { GoHome } from "react-icons/go";
import { TbDiscountOff } from "react-icons/tb";
import { AiOutlineCalculator } from "react-icons/ai";
import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="grid place-items-center   ">

        <h2 className="mt-20 font-semibold mx-10 text-center  ">Please , Follow the menu for your destinetion . Those menu redirect you to deffrent routes. Thank you..  </h2>
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        <li className="text-xl">
          <Link to={"/"}>
            <GoHome />
          </Link>
        </li>
        <li className="text-xl">
          <Link to={"/count"}>
            <TbDiscountOff />
          </Link>
        </li>
        <li className="text-xl">
          <Link to={"/calculate"}>
            <AiOutlineCalculator />
          </Link>
        </li>
      </ul>
    </div>
  );
};
