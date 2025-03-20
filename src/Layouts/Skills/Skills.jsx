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

      <Tabs className="">
        <TabList className="w-full flex flex-wrap ">
          <Tab
            className="w-20 text-center py-2 cursor-pointer focus:outline-none hover:text-skyBlue hover:font-medium"
            selectedClassName="!bg-skyBlue !text-black !font-medium">
            All
          </Tab>
          <Tab
            className="w-20 text-center py-2 cursor-pointer focus:outline-none hover:text-skyBlue hover:font-medium"
            selectedClassName="!bg-skyBlue !text-black !font-medium">
            Frontend
          </Tab>
          <Tab
            className="w-20 text-center py-2 cursor-pointer focus:outline-none hover:text-skyBlue hover:font-medium"
            selectedClassName="!bg-skyBlue !text-black !font-medium">
            Backend
          </Tab>

          <Tab
            className="w-20 text-center py-2 cursor-pointer focus:outline-none  hover:text-skyBlue hover:font-medium"
            selectedClassName="!bg-skyBlue !text-black !font-medium">
            UI/UX
          </Tab>
          <Tab
            className="w-20 text-center py-2 cursor-pointer focus:outline-none  hover:text-skyBlue hover:font-medium"
            selectedClassName="!bg-skyBlue !text-black !font-medium">
            Tools
          </Tab>
          <Tab
            className="w-20 text-center py-2 cursor-pointer focus:outline-none  hover:text-skyBlue hover:font-medium"
            selectedClassName="!bg-skyBlue !text-black !font-medium">
            Extras
          </Tab>
        </TabList>

        <div className="pt-4">
          <TabPanel>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5   gap-16">
              {skills.map((skill) => (
                <SkillCard skill={skill}></SkillCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-16">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-16">
              {skills
                .filter((skill) => skill.category === "backend")
                .map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-16">
              {skills
                .filter((skill) => skill.category === "design")
                .map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-16">
              {skills
                .filter((skill) => skill.category === "tools")
                .map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-16">
              {skills
                .filter((skill) => skill.category === "others")
                .map((skill) => (
                  <SkillCard
                    key={skill.name}
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
