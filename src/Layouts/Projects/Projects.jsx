import React from "react";
import { LuFolderCog } from "react-icons/lu";
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
