import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdBook } from "react-icons/io";
import { LuFolderCog, LuPhoneCall } from "react-icons/lu";
import { TbSquareRoundedLetterA } from "react-icons/tb";

const menuIcons = [
  {id: 1, icon: <AiOutlineHome />, name: "Home", link: "#home"},
  {id: 2, icon: <FaCode />, name: "Skills", link: "#skills"},
  {id: 3, icon: <LuFolderCog />, name: "Projects", link: "#projects"},
  {id: 4, icon: <IoMdBook />, name: "Education", link: "#education"},
  {id: 5, icon: <GrAchievement />, name: "Achievements", link: "#achievements"},
  {id: 6, icon: <LuPhoneCall />, name: "Contact", link: "#contact"},
];

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 1024) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, //
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <div>
      <div className="hidden lg:flex flex-col items-center justify-center gap-7 text-xl text-darkgrey border px-4 py-6 rounded-4xl animate__animated animate__backInRight">
        {menuIcons.map((item) => (
          <a
            key={item.id}
            href={item.link}
            onClick={(e) => handleSmoothScroll(e, item.link)}
            className="hover:text-skyBlue transition-all duration-300 cursor-pointer">
            {item.icon}
          </a>
        ))}
      </div>

      <div className={`fixed lg:hidden left-0 top-0 w-full bg-bgdark transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex justify-between items-center py-4 px-10">
          <div className="relative">
            <h2 className="text-4xl font-semibold">Atique</h2>
            <TbSquareRoundedLetterA className="absolute left-28 top-1 text-xl text-skyBlue" />
          </div>

          <HiMenuAlt3
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {isOpen && (
        <ul className="fixed top-16 left-0 w-full bg-bgdark/90 py-4 flex flex-col items-center justify-center space-y-2 text-white z-40 shadow-md transition-all duration-300 lg:hidden hover:font-bold ">
          {menuIcons.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={(e) => handleSmoothScroll(e, item.link)}
              className="flex items-center gap-2 px-6 py-2 hover:text-skyBlue transition-all duration-300 cursor-pointer hover:gap-4">
              {item.icon} {item.name}
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menubar;
