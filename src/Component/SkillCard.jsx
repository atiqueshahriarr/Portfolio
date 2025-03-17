import React from "react";

const SkillCard = ({skill}) => {
  return (
    <div className="bg-bgdark h-20 flex items-center justify-center text-xs relative">
      <div className="flex flex-col items-center gap-1 justify-center ">
        <img
          src={skill.img}
          alt={skill.name}
          className="w-8 h-8"
        />
        <p className="text-white">{skill.name}</p>
      </div>


      <div className="absolute bg-skyBlue h-full w-full flex items-center justify-center hover:opacity-90 opacity-0 transition-all duration-500 cursor-pointer">
        <span className="text-black font-bold capitalize text-center">{skill.level}</span>
      </div>
    </div>
  );
};

export default SkillCard;
