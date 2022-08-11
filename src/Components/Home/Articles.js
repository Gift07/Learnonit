import React from "react";

import Laptop from "../../assets/windows.jpg";
import ArticlesCard from "./Components/ArticlesCard";

const Articles = () => {
  return (
    <div className="w-sreen h-[33rem] px-20">
      <div className="flex flex-col">
        <span>
          <h1 className="uppercase font-semibold">New Articles</h1>
        </span>
        <div className="flex items-center justify-centerss">
          <div className="grid py-4 grid-cols-4 items-center justify-center gap-6">
            <ArticlesCard Laptop={Laptop} />
            <ArticlesCard Laptop={Laptop} />
            <ArticlesCard Laptop={Laptop} />
            <ArticlesCard Laptop={Laptop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
