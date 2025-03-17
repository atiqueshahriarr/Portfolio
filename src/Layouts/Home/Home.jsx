import React from "react";
import Achivements from "../Achivements/Achivements";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Introduction from "../Introduction/Introduction";
import Menubar from "../Menubar/Menubar";
import Projects from "../Projects/Projects";
import Sidebar from "../Sidebar/Sidebar";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Sidebar></Sidebar>
      <div className="w-full space-y-20 lg:pl-[420px] lg:pr-24 xl:pl-[500px] xl:pr-36">
        <Introduction></Introduction>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Achivements></Achivements>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
