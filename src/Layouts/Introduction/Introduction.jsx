import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { LuDownload, LuFolderCog } from "react-icons/lu";
import TopTitle from "../../Component/TopTitle";

const Introduction = () => {
  return (
    <div
      className="pt-16"
      id="home">
      <TopTitle
        titleText="Learn About Me"
        iconItem={<AiOutlineHome />}></TopTitle>

      <h2 className="text-5xl md:text-6xl xl:text-7xl leading-14 md:leading-16 xl:leading-20">
        Hi from <span className="text-skyBlue">Atique</span>, Web Developer & UI/UX Design Enthusiast
      </h2>

      <div className="text-sm flex gap-4 items-end text-darkgrey py-6">
        <span>Hit 24 years</span>
        <BsDot></BsDot>
        <span>Based in Mirpur-1, Dhaka, Bangladesh.</span>
      </div>

      <p className="text-justify leading-7">
        Passionate about designing intuitive, visually captivating user interfaces and creating seamless, user-first digital experiences. With a strong command of <span className="text-skyBlue font-semibold">React, TailwindCSS, JavaScript, and Node.js,</span> I’m on a mission to build
        high-performance websites that not only look great but work flawlessly. Currently exploring the <span className="text-skyBlue font-semibold">Frontend and UI/UX design</span> world, but my next adventure could take me to new heights in 
        <span className="text-skyBlue font-semibold"> Backend</span> innovation!
      </p>

      <div className="mt-10 flex gap-6 ">
        <a
          href="./Web Developer Resume of Md. Atique Shahriar.pdf"
          target="_blank"
          className="bg-skyBlue text-black font-semibold h-10 w-40 rounded-3xl flex items-center justify-center gap-2 hover:bg-transparent hover:text-skyBlue hover:border-2 hover:border-skyBlue cursor-pointer transition-all duration-100">
          Get Resume <LuDownload className="text-xl" />
        </a>

        <a
          href="#projects"
          className="bg-skyBlue text-black font-semibold h-10 w-40 rounded-3xl flex items-center justify-center gap-2 hover:bg-transparent hover:text-skyBlue hover:border-2 hover:border-skyBlue cursor-pointer transition-all duration-100">
          Projects <LuFolderCog className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
