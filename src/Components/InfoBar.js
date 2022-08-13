import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const InfoBar = () => {
  return (
    <div className="h-9 w-screen bg-sky-500 text-white flex items-center justify-between text-xs font-light uppercase px-20">
      <span>Welcome to Learnonit!</span>
      <div className="flex items-center gap-x-6">
        <span className="flex items-center gap-x-3">
          <h1>My Account</h1>
          <h1>About Us</h1>
          <h1>Wish list</h1>
          <h1>Articles</h1>
          <h1>New entry</h1>
          <Link to="user/sign-in">
            <h1>Login</h1>
          </Link>
        </span>
        <hr className=" bg-white h-6 w-[0.2px]" />
        <div className="flex items-center gap-x-1">
          <span className="p-1 rounded-full text-lg hover:bg-gray-700 hover:text-sky-500">
            <AiOutlineInstagram />
          </span>
          <span className="p-1 rounded-full text-lg hover:bg-gray-700 hover:text-sky-500">
            <AiOutlineInstagram />
          </span>
          <span className="p-1 rounded-full text-lg hover:bg-gray-700 hover:text-sky-500">
            <AiOutlineInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
