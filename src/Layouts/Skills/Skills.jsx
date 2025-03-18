import React from "react";
import { FaCode } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import { skills } from "../../Component/skill_Item";
import SkillCard from "../../Component/SkillCard";
import TopTitle from "../../Component/TopTitle";

const Skills = () => {
  return (
    <div>
      <TopTitle
        titleText="Tech Strikes"
        iconItem={<FaCode />}></TopTitle>

      <div className="grid grid-cols-3 md:grid-cols-5  xl:grid-cols-6 2xl:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
