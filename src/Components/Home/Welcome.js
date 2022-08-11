import React from "react";
import WelcomePic from "../../assets/windows.jpg";

const Welcome = () => {
  return (
    <div className="w-screen h-[33rem] relative">
      <span className="h-full absolute z-10">
        <img
          src={WelcomePic}
          alt="welcomepic"
          className="w-screen h-full object-cover"
        />
      </span>
      <div className="absolute bg-gray-700 w-full h-full z-20 backdrop-blur-md opacity-50" />
      <div className="absolute w-full h-full z-30 px-20">
        <div className="relative">
          <div className="max-w-3xl absolute top-24 ">
            <span className="flex items-center gap-x-4">
              <hr className="w-24 bg-sky-600" />
              <h1 className="uppercase font-extralight text-orange-600">
                Checkout Our New Book
              </h1>
            </span>
            <span className="text-5xl">
              <h1 className="py-6 text-gray-50 font-bold">
                Ex officia ullamco culpa commodo ea ullamco nostrud dolore amet
              </h1>
            </span>
            <span className="py-3">
              <p className="text-xs text-gray-50">
                'Et eu esse aliqua enim adipisicing Lorem adipisicing amet
                aliqua amet consectetur fugiat cillum. Ullamco ipsum velit
                voluptate exercitation fugiat aliqua non esse enim. Ex do tempor
                deserunt reprehenderit. Ipsum ipsum est consequat adipisicing.
                In occaecat excepteur elit veniam consequat.
              </p>
            </span>
            <button className="px-8 py-2 uppercase text-sm bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-full my-3">
              Pre Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
