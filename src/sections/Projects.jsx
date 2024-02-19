import React from "react";
import Card from "react-bootstrap/Card";

const Projects = () => {
  function projectCard(project) {
    return (
      <Card style={{ width: "18rem", margin: "3rem" }}>
        <Card.Img variant="top" src="" alt="..." fluid />
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
    {},
  ];
  return (
    <section id="projects" className="section row">
      {/* <div className="container d-flex justify-content-center align-items-center"></div> */}
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h3>projects</h3>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {projects.map((project) => {
            return projectCard(project);
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
