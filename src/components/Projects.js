import React from "react";
import PROJECTS from "../data/projects";

const Project = props => {
  const { title, description, image, link } = props.project;
  return (
    <div
      style={{
        margin: 20,
        display: "inline-block",
        width: 350
      }}
    >
      <h3>{title}</h3>
      <img src={image} alt="profile" style={{ width: 200, height: 150 }} />
      <p>{description}</p>
      <a href={link} target="blank_target">
        {link}
      </a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {PROJECTS.map(PROJECTS => (
        <Project key={PROJECTS.id} project={PROJECTS} />
      ))}
    </div>
  </div>
);

export default Projects;
