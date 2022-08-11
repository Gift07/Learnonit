import React from "react";
import BooksCard from "./Components/BooksCard";

const Books = () => {
  return (
    <div className="w-screen px-20 py-10">
      <div className="flex flex-col items-center justify-center">
        <span className="w-full">
          <h1 className="uppercase font-semibold">New Books</h1>
        </span>
        <div className="grid grid-cols-4 items-center gap-6 py-3">
          <BooksCard />
          <BooksCard />
          <BooksCard />
          <BooksCard />
        </div>
      </div>
    </div>
  );
};

export default Books;
