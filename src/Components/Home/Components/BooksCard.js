import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Laptop from "../../../assets/clement.jpg";

const BooksCard = () => {
  return (
    <div className="w-64 ">
      <img src={Laptop} alt="laptop" className="w-full h-64 object-cover" />
      <span className="pt-2">
        <span className="flex items-center justify-between">
          <h1 className="uppercase font-extralight text-sm text-gray-600 mt-2">
            Enim commodo
          </h1>
          <AiOutlineHeart />
        </span>
        <span>
          <h1 className="text-xs">Laborum irure irure sint pariatur</h1>
          <h1 className="my-2 text-lg font-extralight">$1267</h1>
        </span>
        <span className="flex items-center justify-between">
          <button className="px-3 py-2 text-xs text-white uppercase bg-orange-500 rounded-full">
            Add to cart
          </button>
          <button className="text-sm">View item</button>
        </span>
      </span>
    </div>
  );
};

export default BooksCard;
