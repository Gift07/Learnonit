import React from "react";
import BooksCategoryCard from "./Home/Components/BooksCategoryCard";

const BooksCategory = () => {
  return (
    <div className="bg-black text-white px-20 py-10">
      <div className="flex flex-col items-center justify-center">
        <span className="flex items-center gap-x-3">
          <hr className="w-32 bg-orange-400" />
          <h1 className="uppercase font-extralight">
            Available Books Categories
          </h1>
          <hr className="w-32 bg-orange-400" />
        </span>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 items-center justify-center gap-4">
            <BooksCategoryCard />
            <BooksCategoryCard />
            <BooksCategoryCard />
            <BooksCategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCategory;
