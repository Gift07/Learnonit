import React from "react";
import Card from "./Components/Card";

const Categories = () => {
  return (
    <div className="w-screen h-44  px-20 flex flex-col items-center justify-center">
      <div>
        <h1>Article categories</h1>
      </div>
      <div className="flex items-center gap-x-12 py-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Categories;
