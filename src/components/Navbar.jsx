import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2 ">
          <img
            onClick={() => navigate(-1)}
            src={assets.arrow_left}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            src={assets.arrow_right}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className=" cursor-pointer bg-white text-black text-[15px] px-4 hidden md:block rounded-2xl py-1">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            M
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-poiter">
          All
        </p>
        <p className="bg-black py-1 px-4 rounded-2xl cursor-poiter">Music</p>
        <p className="bg-black py-1 px-4 rounded-2xl cursor-poiter">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;