import React from "react";
import Love from "../../assets/love.jpg";
import StarRatings from "react-star-ratings";
import {
  AiOutlineFacebook,
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const BookDetail = () => {
  return (
    <div className="w-full flex  flex-col items-center px-20">
      <div className="w-full  py-8">
        <span>
          <h1 className="text-xl font-light uppercase">
            Aliquip officia tempor
          </h1>
        </span>
        <div className="w-full flex items-center">
          <div className="w-1/12 flex-1  my-2">
            <img
              src={Love}
              alt="love"
              className="w-full h-[27rem] object-cover"
            />
          </div>
          <div className="w-1/12 flex-1  pl-3">
            <div className="w-full h-[27rem] flex items-start">
              <span>
                <h1 className="uppercase text-lg font-light">
                  Deserunt proident laboris ut aliquip{" "}
                </h1>
                <h1 className="text-xs flex item-center text-gray-500 my-3">
                  <StarRatings
                    rating={4}
                    starRatedColor="gold"
                    numberOfStars={5}
                    starDimension="16px"
                    starSpacing="1px"
                    size={15}
                    name="rating"
                  />
                  (Rated by the owner)
                </h1>
                <h1 className="text-lg font-semibold text-gray-500">$123.4</h1>
                <p className="my-3 text-xs  max-w-sm">
                  Ullamco labore eiusmod eiusmod tempor eu sit dolor cupidatat
                  sunt laborum pariatur. Cillum est fugiat laboris velit et
                  adipisicing cupidatat esse aute amet officia ipsum. Officia in
                  eiusmod qui veniam non culpa proident ut magna.
                </p>
                <span className="flex items-cennter justify-start">
                  <button className="text-sm px-4 py-1 bg-blue-600 text-white">
                    +
                  </button>
                  <span className="bg-gray-200 px-4 py-1">1</span>
                  <button className="text-sm bg-red-500 text-white px-4 py-1">
                    -
                  </button>
                </span>
                <span className=" flex items-center my-3 text-xs gap-x-3">
                  <span className="p-2 text-red-500 bg-red-200 rounded-full">
                    <AiOutlineHeart />
                  </span>
                  Add to wishlist
                </span>
                <span className="flex items-center gap-x-4">
                  <h1 className="text-xs font-semibold text-gray-500">
                    Share product
                  </h1>
                  <span className="flex items-center gap-x-2">
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                    <AiOutlineFacebook />
                  </span>
                </span>
                <span>
                  <button className="px-8 py-2 uppercase bg-orange-500 text-xs rounded-full text-white my-3">
                    Pre order Now
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
