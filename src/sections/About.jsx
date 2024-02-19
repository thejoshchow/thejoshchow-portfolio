import React from "react";

const About = () => {
  return (
    <section id="about" className="section row">
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
        <div className="col-12 col-lg-6 d-flex flex-column align-items-end"></div>
        <div
          className="col-12 col-lg-6 d-flex flex-column align-items-start"
          style={{ paddingRight: "15rem" }}
        >
          <h1>hello, world</h1>
          <h1 className="py-3">i'm josh</h1>
          <p className="py-5">
            Passionate Software Engineer with a love for crafting elegant
            solutions in the digital realm. When not immersed in code, you'll
            find me exploring the great outdoors—whether conquering trails on a
            hike, carving fresh powder on a snowboard, or cruising scenic routes
            on a bike. With a knack for problem-solving in both the tech and
            natural landscapes, I thrive on the dynamic challenges each brings.
            Committed to continuous learning and embracing new adventures, I
            bring a sense of curiosity and enthusiasm to both the world of
            software development and the vast wilderness beyond.
          </p>
        </div>
      </div>
      <div className="container m-auto">
        <div className="d-flex flex-row justify-content-center flex-wrap">
          <h5 className="tech">python</h5>
          <h5 className="tech">javascript</h5>
          <h5 className="tech">react</h5>
          <h5 className="tech">redux</h5>
          <h5 className="tech">fastapi</h5>
          <h5 className="tech">django</h5>
          <h5 className="tech">vue.js</h5>
          <h5 className="tech">flask</h5>
          <h5 className="tech">html</h5>
          <h5 className="tech">css</h5>
        </div>
      </div>
    </section>
  );
};

export default About;
