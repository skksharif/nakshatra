import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/p1.png"
          title="A Website for cartoonist"
          description="The website features interactive galleries displaying the cartoonist's 
          illustrations, engaging visitors with captivating visuals and witty narratives. 
        "
        />
        <ProjectCard
          src="/p2.png"
          title="A Website for Staffing Company"
          description="The website features simple and professsional designs.  we ensured seamless navigation and enhanced accessibility."
        />
        <ProjectCard
          src="/p3.png"
          title="CapitalizeHub"
          description="The website features simple and professsional designs.  we ensured seamless navigation and enhanced accessibility."
        />
      </div>
    </div>
  );
};

export default Projects;