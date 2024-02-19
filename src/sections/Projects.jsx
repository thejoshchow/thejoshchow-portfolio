import React from "react";
import Card from "react-bootstrap/Card";

const Projects = () => {
  const projectCard = (project) => {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={
            project.screenshot === ""
              ? "img/placeholder.svg"
              : project.screenshot
          }
          alt="..."
        />
        <Card.Header className="d-flex justify-content-center">
          <a className="btn card-button" href={project.repo}>
            github
          </a>
        </Card.Header>
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-wrap justify-content-center">
          {project.tech.map((item) => (
            <div className="badge" key={item}>
              {item}
            </div>
          ))}
        </Card.Footer>
      </Card>
    );
  };
  const projects = [
    {
      name: "Portfolio",
      screenshot: "img/portfolio.png",
      description:
        "Single-page application built with React and selective styling using Bootstrap and HTML/CSS.",
      tech: ["Javascript", "React", "HTML", "CSS"],
      website: "",
      repo: "https://github.com/thejoshchow/thejoshchow-portfolio",
    },
    {
      name: "Travel Buddy",
      screenshot: "img/travelbuddy.png",
      description:
        "Travel buddy is a web application designed to help facilitate and encourage the the conversation around planning a group trip. The project consists of a postgresql database served by a fastapi server and a react frontend with ui components provided bootstrap components as well as custom css styling. Front-end authentication and authorization is hand-built using redux toolkit and rtk query.",
      tech: ["Python", "FastAPI", "Javascript", "React", "Redux", "CSS"],
      website: "",
      repo: "",
    },
    {
      name: "CarCar",
      screenshot: "",
      description: "CarCar...",
      tech: ["Python", "Django", "React"],
      website: "",
      repo: "",
    },
    {
      name: "",
      screenshot: "",
      description: "",
      tech: [],
      website: "",
      repo: "",
    },
    {
      name: "",
      screenshot: "",
      description: "",
      tech: [],
      website: "",
      repo: "",
    },
  ];
  return (
    <section id="projects" className="section row">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <h3 className="m-auto">projects</h3>
        </div>
        <div className="container d-flex flex-wrap p-5">
          {projects.map((project) => {
            return (
              <div key={project.name} className="col-12 col-xl-3 m-5">
                {projectCard(project)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
