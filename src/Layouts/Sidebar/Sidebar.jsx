import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="lg:fixed lg:w-[350px] lg:top-1/2 lg:-translate-y-1/2 left-10 border-borderGray p-6 rounded-4xl flex flex-col items-center space-y-6 sidebarshadow">
      <div className="fixed"></div>
      <div className="flex justify-between w-full">
        <h2 className="text-3xl font-bold">Atique</h2>
        <p className="text-sm text-right">
          UI/UX Designer &<br />
          Web Developer
        </p>
      </div>

      <div className="w-64 space-y-6">
        <div className="bg-[url(/my_image.jpg)] bg-cover h-52 rounded-4xl myImage"></div>

        <div className="flex gap-12">
          <div>
            <h1 className="text-6xl text-skyBlue">5+</h1>
            <p className="text-darkgrey pt-2 text-sm uppercase ">Practice Projects</p>
          </div>
          <div className="text-right">
            <h1 className="text-6xl text-skyBlue">1+</h1>
            <p className="text-darkgrey pt-2 text-sm uppercase">Year of Personal Experience</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-darkgrey text-lg">
          <div className="h-10 w-10 flex items-center justify-center bg-darkgrey/10  rounded-[100%] ">
            <FiGithub />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-darkgrey/10  rounded-[100%]">
            <FaLinkedinIn />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-darkgrey/10  rounded-[100%]">
            <FaFacebookF />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-darkgrey/10  rounded-[100%]">
            <FaTelegramPlane />
          </div>
        </div>

        <div>
          <p className="text-darkgrey text-sm hidden lg:block">&copy; 2025 Atique. All Rights Reserved</p>
        </div>
      </div>

      <div className="bg-skyBlue w-full text-center py-2 rounded-4xl text-bggrey uppercase">Say Hello</div>
    </div>
  );
};

export default Sidebar;
