import React from "react";

import Baby from "../../assets/baby.jpg";
import Card from "./Components/Card";

const Related = () => {
  return (
    <div className="px-20 my-3 bg-gray-100">
      <div>
        <span>
          <h1 className="text-lg text-blue-500 font-bold">Related items</h1>
        </span>
      </div>
      <div className="w-full flex items-center">
        <div className="w-full grid grid-cols-5 items-center justify-center gap-4">
          <Card Baby={Baby} />
          <Card Baby={Baby} />
          <Card Baby={Baby} />
          <Card Baby={Baby} />
          <Card Baby={Baby} />
        </div>
      </div>
    </div>
  );
};

export default Related;
