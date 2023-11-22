import React from "react";
import { NavLink } from "react-router-dom";
import IMAGES from "../assets";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

const DBLeftSection = () => {
  return (
    <div className="h-full py-12 flex flex-col bg-lightOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-3">
      <NavLink to={"/"} className="flex items-center justify-start gap-4 px-6">
        <img src={IMAGES.Logo} className="w-16 h-15" alt="logo" />
        <p className="text-headingColor font-bold text-2xl">Eat Ease</p>
      </NavLink>
      <hr />

      <ul className="flex flex-col gap-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : isNotActiveStyles
          }
          to={"/dashboard/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : isNotActiveStyles
          }
          to={"/dashboard/orders"}
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : isNotActiveStyles
          }
          to={"/dashboard/items"}
        >
          Items
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : isNotActiveStyles
          }
          to={"/dashboard/newItem"}
        >
          Add New Item
        </NavLink>
        {/* <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : isNotActiveStyles
          }
          to={"/dashboard/users"}
        >
          Users
        </NavLink> */}
      </ul>
      <div className="w-full items-center justify-center flex h-225 mt-auto px-2">
        <div className="w-full h-full rounded-md bg-red-500 flex flex-col items-center justify-center gap-3 px-3">
          <div className="w-12 h-12 border bg-white rounded-full flex items-center justify-center">
            <p className="text-2xl font-bold text-red-600">?</p>
          </div>
          <p className="text-xl text-primary font-semibold">Help Center</p>
          <p className="text-base text-primary text-center">Having trouble in city, Please contact us for more questions</p>
          <p className="px-4 py-2 rounded-full bg-primary text-red-600 cursor-pointer font-semibold">Get in touch</p>
        </div>
      </div>
    </div>
  );
};

export default DBLeftSection;
