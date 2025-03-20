import React from "react";
import Achivements from "../Achivements/Achivements";
import Education from "../Education/Education";
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

import Contact from "../Contact/Contact";
import Menubar from "../Menubar/Menubar";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="">
      <div className="lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:left-10">
        <Sidebar />
      </div>

      <div className="lg:pl-[420px] lg:pr-24">
        <div className="lg:max-w-4xl lg:mx-auto space-y-20">
          <Introduction />
          <Skills />
          <Projects />
          <Education />
          <Achivements />
          <Contact />
        </div>
      </div>

      <div className="lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:right-10">
        <Menubar />
      </div>
    </div>
  );
};

export default Home;
