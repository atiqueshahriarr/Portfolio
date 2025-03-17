import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { IoCodeDownload } from "react-icons/io5";
import TopTitle from "../../Component/TopTitle";

const Introduction = () => {
  return (
    <div className="pt-10 space-y-2">
      <TopTitle
        titleText="Learn About Me"
        iconItem={<AiOutlineHome />}></TopTitle>

      <h2 className="text-6xl leading-18 -mt-2 ">
        Hi from <span className="text-skyBlue">Atique</span>, Web Developer & UI/UX Design Enthusiast
      </h2>

      <div className="text-center text-xs flex gap-4 items-end text-darkgrey pt-2">
        <span>Hit 24 years</span>
        <BsDot></BsDot>
        <span>Based in Mirpur-1, Dhaka</span>
      </div>

      <p className="pt-2 text-justify text-sm  leading-6">
        Passionate about designing intuitive, visually captivating user interfaces and creating seamless, user-first digital experiences. With a strong command of React, TailwindCSS, JavaScript, and Node.js, I’m on a mission to build high-performance websites that not only look great but work
        flawlessly. Currently exploring the Frontend and UI/UX design world, but my next adventure could take me to new heights in Backend innovation!
      </p>
      <div className="mt-6 flex gap-4">
        <button className="bg-skyBlue h-10 w-40 text-black flex items-center justify-center gap-2 text-sm font-semibold rounded-3xl">
          Get Resume <IoCodeDownload className="text-xl" />
        </button>
        <button className="bg-skyBlue h-10 w-40 text-black flex items-center justify-center gap-2 text-sm font-semibold rounded-3xl">
          Projects <IoCodeDownload className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Introduction;
