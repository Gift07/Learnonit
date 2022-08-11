import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ArticlesCard = ({ Laptop }) => {
  return (
    <div className="w-64 pb-2">
      <img
        src={Laptop}
        alt="laptop"
        className="w-full pb-2 h-64 object-cover"
      />
      <span className="pt-2">
        <h1 className="text-sm uppercase text-gray-500 font-extralight">
          Ullamco dolor aliqua culpa
        </h1>
        <h1 className="text-sm font-bold capitalize text-sky-600">
          Gift Edward
        </h1>
        <p className="text-xs truncate">
          Est nisi tempor irure deserunt sit deserunt. Aliquip dolore cillum
          labore cillum mollit. Nostrud commodo incididunt laborum velit ea
          commodo culpa cillum proident sit.
        </p>
        <h1>Stars</h1>
      </span>
      <span className="flex items-center justify-between">
        <button className="bg-orange-600 px-3 rounded-full py-2 text-xs text-white">
          View Article
        </button>
        <span className="text-lg">
          <AiOutlineHeart />
        </span>
      </span>
    </div>
  );
};

export default ArticlesCard;
