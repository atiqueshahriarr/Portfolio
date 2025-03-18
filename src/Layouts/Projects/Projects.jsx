import React from "react";
import { LuFolderCog } from "react-icons/lu";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCard from "../../Component/ProjectCard";
import { projects } from "../../Component/projects";
import TopTitle from "../../Component/TopTitle";

const Projects = () => {
  return (
    <div>
      <TopTitle
        titleText="Practice Work"
        iconItem={<LuFolderCog />}></TopTitle>
      <Tabs className="">
        <TabList className="w-full flex flex-wrap gap-1 p-1 rounded-md">
          <Tab
            className="px-4 py-1 cursor-pointer rounded-md  border-borderGray border focus:outline-none transition-all duration-300"
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
            Fullstack
          </Tab>
        </TabList>

        <div className="">
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard project={project}></ProjectCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects
                .filter((project) => project.category === "Design")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects
                .filter((project) => project.category === "Frontend")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects
                .filter((project) => project.category === "Fullstack")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Projects;
