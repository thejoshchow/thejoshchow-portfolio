import React from "react";
import Card from "react-bootstrap/Card";

const Projects = () => {
  const projectCard = (project) => {
    return (
      <Card>
        <Card.Img
          className="img-fluid"
          variant="top"
          src={
            project.screenshot === ""
              ? "img/placeholder.svg"
              : project.screenshot
          }
          alt="..."
        />
        <Card.Header className="d-flex justify-content-around">
          {project.website === "" ? null : (
            <a className="btn card-button" href={project.website}>
              live
            </a>
          )}
          <a className="btn card-button" href={project.repo}>
            source
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
        "This app. What you're looking at now. Whoa. App-ception. Single-page application built with React and selective styling using Bootstrap and HTML/CSS. Built a simple CD workflow with Github Actions and Pages to build and deploy the application.",
      tech: ["Javascript", "React", "Bootstrap", "HTML", "CSS"],
      website: "https://thejoshchow.github.io",
      repo: "https://github.com/thejoshchow/thejoshchow-portfolio",
    },
    {
      name: "Travel Buddy",
      screenshot: "img/travelbuddy.png",
      description:
        "Travel buddy is a web application designed to help facilitate and encourage the the conversation around planning a group trip. The project consists of a postgresql database served by a fastapi server and a react frontend with ui components provided bootstrap components as well as custom css styling. Front-end authentication and authorization is hand-built using redux toolkit and rtk query.",
      tech: [
        "Python",
        "FastAPI",
        "Javascript",
        "React",
        "Redux",
        "HTML",
        "CSS",
      ],
      website: "https://thethirteen.gitlab.io/travelbuddy",
      repo: "https://github.com/thejoshchow/travelbuddy",
    },
    {
      name: "CarCar",
      screenshot: "",
      description:
        "CarCar is an application built for a car dealership to track inventory, sales and service records. The backend is serviced by a django and composed of three seperate microservices, and the frontend built with javascript and react.",
      tech: ["Python", "Django", "React", "Bootstrap"],
      website: "",
      repo: "https://github.com/thejoshchow/carcar",
    },
    // {
    //   name: "",
    //   screenshot: "",
    //   description: "",
    //   tech: [],
    //   website: "",
    //   repo: "",
    // },
  ];
  return (
    <section id="projects" className="section d-flex align-items-center">
      <div className="container d-flex flex-column align-items-between justify-content-center m-auto">
        <div className="row d-flex p-3 mb-5">
          <div className="p-5">
            <h3>projects</h3>
          </div>
          {projects.map((project) => {
            return (
              <div key={project.name} className="col-12 col-lg-6 col-xl-4 mb-4">
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
