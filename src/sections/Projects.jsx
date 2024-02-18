import React from "react";
import Card from "react-bootstrap/Card";

const Projects = () => {
  function projectCard(project) {
    return (
      <Card style={{ width: "18rem", margin: "3rem" }}>
        <Card.Img variant="top" src="{project.website}" />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <a href={project.repo}>Github</a>
        </Card.Body>
      </Card>
    );
  }
  const projects = [
    {
      name: "Travel Buddy",
      screenshot: "none",
      description: "Travel Buddy etc...",
      techStack: ["Python", "Javascript", "React", "Redux"],
      website: "",
      repo: "",
    },
    {
      name: "CarCar",
      screenshot: "none",
      description: "CarCar...",
      techStack: [""],
      website: "",
      repo: "",
    },
  ];
  return (
    <section id="projects" className="section">
      {/* <div className="container d-flex justify-content-center align-items-center"></div> */}
      <div className="container">
        <h3>projects</h3>
        <div className="d-flex justify-content-center align-items-center">
          {projects.map((project) => {
            return projectCard(project);
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
