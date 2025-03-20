import React from "react";

const SkillCard = ({skill}) => {
  return (
    <div className="flex flex-col items-center gap-1 justify-center">
      <p className="text-white whitespace-nowrap">{skill.name}</p>

      <img
        src={skill.img}
        alt={skill.name}
        className="w-10 h-10 hover:w-12 hover:h-12 transition-all duration-300 cursor-pointer"
      />

      <progress
        className="progress w-20 mt-2 h-[6px]"
        value={skill.level}
        max="100"
        style={{color: skill.color}}></progress>
    </div>
  );
};

export default SkillCard;
