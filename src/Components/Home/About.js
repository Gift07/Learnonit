import React from "react";
import Laptop from "../../assets/clement.jpg";

const About = () => {
  return (
    <div className="w-screen h-[30rem]">
      <div className="grid grid-cols-2 items-center h-full">
        <div className="w-full h-full bg-gray-100">
          <div className="pl-20 pt-6">
            <h1 className="uppercase font-semibold text-2xl font-poppins text-gray-800">
              Deserunt sint enim esse labore culpa
            </h1>
            <p className="py-4  pr-4 text-gray-600">
              Aute id dolor cillum voluptate reprehenderit in. Qui ex excepteur
              eiusmod tempor laboris amet. Do nisi occaecat non quis laboris
              irure adipisicing adipisicing.Eu labore ea et aute sit consequat
              est sint duis cillum amet eiusmod. Ex velit consequat tempor
              voluptate eiusmod do eu ut elit amet. Eu culpa do officia officia
              pariatur. Ullamco consectetur laborum est minim. Duis dolor anim
              anim cupidatat ut esse. Eiusmod eiusmod eu et id cupidatat veniam.
              Lorem sunt cupidatat deserunt est ut incididunt nisi eiusmod
              aliquip pariatur et occaecat ea aliqua.
            </p>
            <span>
              <button className="px-8 my-3  rounded-full bg-sky-500 text-white py-2">
                View Now
              </button>
            </span>
          </div>
        </div>
        <div className="relative w-full h-full ">
          <span className="absolute w-full h-full">
            <img
              src={Laptop}
              alt="laptop"
              className="w-full h-full object-cover"
            />
          </span>
          <div className="absolute w-full h-full">
            <h1 className="w-44 py-2 uppercase font-extralight text-sm  flex items-center justify-center bg-orange-600 text-white">
              Coming Out 15 <sup className="lowercase mr-1">th</sup> May
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
