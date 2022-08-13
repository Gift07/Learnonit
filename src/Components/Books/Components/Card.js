import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Card = ({ Baby }) => {
  return (
    <div className="w-52 shadow-lg rounded-xl my-3 mb-4 bg-white">
      <img
        src={Baby}
        alt="baby"
        loading="lazy"
        className="w-full rounded-t-2xl h-32 object-cover"
      />
      <span className="px-2">
        <h1 className="font-semibold text-sm  text-blue-500 px-2">
          Gift Edward
        </h1>
        <h1 className="text-xs px-2">Dolore et elit nulla adipisicing.</h1>
      </span>
      <span className="flex items-center justify-between px-2">
        <button className="px-4 py-2 rounded-full text-xs text-white bg-orange-500">
          View item
        </button>
        <span className="text-sm text-red-500 p-3 bg-red-200 rounded-full mb-2">
          <AiOutlineHeart />
        </span>
      </span>
    </div>
  );
};

export default Card;
