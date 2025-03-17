import React from "react";
import { FaCode } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
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

      <Tabs>
        <TabList className="w-full flex flex-wrap gap-1 p-1">
          <Tab
            className="px-4 py-1 cursor-pointer rounded-md border-borderGray border focus:outline-none transition-all duration-300"
            selectedClassName="!bg-skyBlue !text-white">
            All
          </Tab>
          <Tab
            className="px-4 py-1 cursor-pointer rounded-md  border-borderGray border focus:outline-none transition-all duration-300"
            selectedClassName="!bg-skyBlue !text-white">
            UI/UX
          </Tab>
          <Tab
            className="px-4 py-1 cursor-pointer rounded-md  border-borderGray border focus:outline-none transition-all duration-300"
            selectedClassName="!bg-skyBlue !text-white">
            Frontend
          </Tab>
          <Tab
            className="px-4 py-1 cursor-pointer rounded-md  border-borderGray border focus:outline-none transition-all duration-300"
            selectedClassName="!bg-skyBlue !text-white">
            Backend
          </Tab>

          <Tab
            className="px-4 py-1 cursor-pointer rounded-md  border-borderGray border focus:outline-none transition-all duration-300"
            selectedClassName="!bg-skyBlue !text-white">
            Others
          </Tab>
        </TabList>

        <div className="p-1">
          <TabPanel>
            <div className="grid grid-cols-3 md:grid-cols-5  xl:grid-cols-6 2xl:grid-cols-7 gap-2">
              {skills.map((skill) => (
                <SkillCard skill={skill}></SkillCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3  lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
              {skills
                .filter((skill) => skill.category === "design")
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3  lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
              {skills
                .filter((skill) => skill.category === "backend")
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3  lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
              {skills
                .filter((skill) => skill.category === "others")
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Skills;
