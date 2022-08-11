import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-20 h-16 sticky w-full flex items-center justify-between z-[100] shadow-lg bg-gray-100">
      <span>
        <h1 className="text-3xl text-sky-400 uppercase font-extralight">
          Learnonit
        </h1>
      </span>
      <span className="rounded-full bg-gray-300 w-[25rem] flex items-center  justify-center px-2">
        <input
          placeholder="Enter text"
          className="outline-none   px-4 py-3 w-80 text-xs bg-gray-300"
        />
        <AiOutlineSearch size={18} color="dodgerBlue" />
      </span>
      <span>
        <ul className="flex items-center gap-x-4 capitalize">
          <li>categories</li>
          <li>Best Articles</li>
          <li>Books</li>
          <li className="text-lg">
            <IoBagOutline />
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Navbar;
