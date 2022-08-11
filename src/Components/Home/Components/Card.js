import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";

const Card = () => {
  return (
    <span className="flex flex-col  items-center justify-center">
      <AiOutlineLaptop size={35} />
      <h1 className="uppercase font-extralight text-gray-900">Technology</h1>
    </span>
  );
};

export default Card;
