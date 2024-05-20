import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectData from "../projectData";

const Projects: React.FC = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container px-6">
          <h2 className="text-5xl font-bold font-roboto mb-12 text-[#70FF00]">
            projects
            <span className="text-[#fff]">( )</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
