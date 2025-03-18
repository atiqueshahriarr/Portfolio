import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode, FaRegUser } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { LuFolderCog, LuPhoneCall } from "react-icons/lu";

const Menubar = () => {
  return (
    <div className="lg:fixed lg:right-10 lg:top-1/2 lg:-translate-y-1/2 flex  justify-center lg:justify-end w-full z-100 py-4 lg:py-0">
      <div className="lg:border px-4 py-5 rounded-4xl flex lg:flex-col items-center justify-center gap-7 text-lg text-darkgrey">
        <AiOutlineHome className="hover:text-skyBlue transition-all duration-300 cursor-pointer" />
        <FaRegUser className="hover:text-skyBlue transition-all duration-300 cursor-pointer" />
        <IoMdBook className="hover:text-skyBlue transition-all duration-300 cursor-pointer" />
        <FaCode className="hover:text-skyBlue transition-all duration-300 cursor-pointer" />
        <GrAchievement className="hover:text-skyBlue transition-all duration-300 cursor-pointer" />
        <LuFolderCog className="hover:text-skyBlue transition-all duration-300 cursor-pointer" />
        <LuPhoneCall className="hover:text-skyBlue transition-all duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Menubar;
