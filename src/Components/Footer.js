import React from "react";

const Footer = () => {
  return (
    <div className="w-screen bg-black py-10 text-white relative">
      <div className="absolute -top-3 px-3 ml-20 py-2 text-white bg-sky-500 text-sm ">
        <h1>Get In Touch</h1>
      </div>
      <div className="absolute bg-black w-full px-20">
        <div style={{ marginTop: "4px" }} className="flex">
          <div className="flex">
            <span>
              <h1 className="upercase mt-4 uppercase font-semibold mb-3">
                Contact info
              </h1>
              <span className="py-3">
                <h1 className="uppercase text-xs    ">Address:</h1>
                <p className="text-xs mb-3">123 Street Name, City, England</p>
              </span>
              <span className="py-3">
                <h1 className="uppercase text-xs    ">Address:</h1>
                <p className="text-xs mb-3">123 Street Name, City, England</p>
              </span>
              <span className="py-3">
                <h1 className="uppercase text-xs    ">Address:</h1>
                <p className="text-xs mb-3">123 Street Name, City, England</p>
              </span>
            </span>
            <span>
              <h1 className="upercase mt-4 uppercase font-semibold mb-3 ml-16">
                Subscribe to our news letter
              </h1>
              <span className="flex items-center">
                <h1 className="ml-16 text-xs text-gray-500 max-w-sm">
                  Get all the latest information on Events, Sales and Offers.
                  Sign up for newsletter today.
                </h1>
                <span className="flex items-center w-[27rem] gap-x-4">
                  <input
                    placeholder="enter text"
                    className="p-2 flex-1 text-xs text-gray-500 bg-gray-900 rounded-full outline-none"
                  />
                  <button className="bg-sky-500 text-white p-2 rounded-full text-xs">
                    Subscribe
                  </button>
                </span>
              </span>
              <hr className="w-full ml-16 mt-3 bg-gray-600" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
