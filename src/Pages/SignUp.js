import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [visibleConfPass, setVisibleConfPass] = useState(false);

  return (
    <div className="w-screen font-poppins flex  h-screen">
      <motion.div
        initial={{ marginRight: 1000 }}
        animate={{ marginRight: 0 }}
        exit={{ marginRight: 1000 }}
        className="flex-1 h-full w-1/2  px-16"
      >
        <div className="flex flex-col h-full  w-full justify-center items-center ">
          <span className="w-full flex flex-col  items-center justify-center">
            <h1 className="font-semibold my-3 text-xl">
              Sign Up for an Account
            </h1>
            <p className="text-xs text-center max-w-xs">
              Deserunt minim et sint proident ea consectetur reprehenderit id
              aliqua enim.
            </p>
          </span>
          <div>
            <form className="py-8">
              <span className="flex items-center gap-x-3">
                <span className=" flex flex-col">
                  <label className="font-semibold mb-2 text-sm">
                    First name
                  </label>
                  <input
                    placeholder="Enter name"
                    className="outline-none bg-gray-200 px-3 py-3  w-52 text-xs"
                  />
                </span>
                <span className="flex flex-col">
                  <label className="font-semibold mb-2 text-sm">
                    Last name
                  </label>
                  <input
                    placeholder="Enter name"
                    className="outline-none bg-gray-200 px-3 py-3  w-52 text-xs"
                  />
                </span>
              </span>
              <span className="flex flex-col py-3">
                <label className="font-semibold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-[26.75rem] bg-gray-200 outline-none text-xs px-3 py-3"
                />
              </span>
              <span className="flex flex-col py-3">
                <label className="font-semibold mb-2 text-sm">Password</label>
                <span className="bg-gray-200 flex items-center pr-3">
                  <input
                    type={visiblePass ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-[25rem] bg-gray-200 outline-none text-xs px-3 py-3"
                  />
                  {visiblePass ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setVisiblePass(!visiblePass)}
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setVisiblePass(!visiblePass)}
                    />
                  )}
                </span>
              </span>
              <span className="flex flex-col py-3">
                <label className="font-semibold mb-2 text-sm">
                  Confirm password
                </label>
                <span className="bg-gray-200 flex items-center pr-3">
                  <input
                    type={visibleConfPass ? "text" : "password"}
                    placeholder="Enter confirm  password"
                    className="w-[25rem] bg-gray-200 outline-none text-xs px-3 py-3"
                  />
                  {visibleConfPass ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setVisibleConfPass(!visibleConfPass)}
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setVisibleConfPass(!visibleConfPass)}
                    />
                  )}
                </span>
              </span>
              <span className="flex items-center gap-x-3 text-xs py-3">
                <input type="checkbox" />
                <h1> I accept terms and conditions</h1>
              </span>
              <span className="w-full">
                <button className="bg-blue-500  w-[26.75rem] py-3 flex items-center justify-center text-white uppercase font-bold text-xs">
                  Sign up
                </button>
              </span>
            </form>
          </div>
        </div>
      </motion.div>
      <div className="bg-blue-500 w-1/2 flex-1 h-full clip-rev text-white ">
        <div className="w-full h-full flex items-center justify-center">
          <span className="flex flex-col  items-center max-w-xs">
            <h1 className="font-semibold">Already have an Account?</h1>
            <p className="text-center my-3 text-xs">
              Nisi aliquip excepteur et magna in ex velit consectetur elit
              nostrud.
            </p>
            <span>
              <Link to="/user/sign-in">
                <button className="border border-white outline-none px-12 py-2 text-sm uppercase my-3">
                  Login
                </button>
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
