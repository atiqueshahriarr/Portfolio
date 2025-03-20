import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbSquareRoundedLetterA } from "react-icons/tb";

const Sidebar = () => {
  const socialLinks = [
    {icon: <FiGithub />, link: "https://github.com/atiqueshahriarr"},
    {icon: <FaLinkedinIn />, link: "https://linkedin.com/in/atiqueshahriarr"},
    {icon: <FaFacebookF />, link: "https://facebook.com/atiqueshahriarr"},
    {icon: <FaTelegramPlane />, link: "https://t.me/atiqueshahriarr"},
  ];

  return (
    <div className="pt-10 lg:p-8 rounded-4xl flex flex-col items-center space-y-6 sidebarShadow lg:w-[350px] xl:w-96">
      <div className="lg:flex justify-between w-full hidden ">
        <div className="relative">
          <h2 className="text-4xl font-semibold">Atique</h2>
          <TbSquareRoundedLetterA className="absolute left-28 top-1 text-xl text-skyBlue" />
        </div>
        <div className="flex items-center">
          <p className="text-right">
            Web Developer
            <br />& UI/UX Designer
          </p>
        </div>
      </div>

      <div className="w-64 space-y-8 mt-20 lg:mt-0">
        <div className="bg-[url(/my_image.jpg)] bg-cover h-52 rounded-2xl rotate-3 hover:rotate-0 myImage my-6"></div>
        <div className="flex gap-12">
          <div>
            <h1 className="text-6xl text-skyBlue">5+</h1>
            <p className="text-darkgrey pt-2 text-sm uppercase">Practice Projects</p>
          </div>
          <div className="text-right">
            <h1 className="text-6xl text-skyBlue">1+</h1>
            <p className="text-darkgrey pt-2 text-sm uppercase">Year of Personal Experience</p>
          </div>
        </div>


        <div className="flex items-center justify-center gap-3 text-darkgrey text-lg">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center bg-darkgrey/10 rounded-full cursor-pointer 
                        hover:border-2 hover:border-skyBlue hover:text-skyBlue hover:text-xl transition-all duration-50">
              {social.icon}
            </a>
          ))}
        </div>


        <p className="text-darkgrey text-sm hidden lg:block">&copy; 2025 Atique. All Rights Reserved</p>
      </div>

      <div className="bg-skyBlue w-full max-w-md text-center py-2 rounded-4xl text-bggrey uppercase font-medium">Say Hello</div>

      
    </div>
  );
};

export default Sidebar;
