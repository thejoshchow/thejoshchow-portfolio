import React from "react";

const About = () => {
  return (
    <section id="about" className="section row">
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-xl-6 d-flex flex-column align-items-end"></div>
        <div
          className="col-xl-6 d-flex flex-column align-items-start"
          style={{ paddingRight: "10rem" }}
        >
          <h1>hello, world</h1>
          <h1>i'm josh</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            euismod non dui sit amet tempus. Vivamus non viverra est. Nulla
            vehicula magna consectetur, auctor mauris ac, imperdiet lorem. Donec
            pellentesque auctor nibh, et suscipit est rutrum non. Praesent
            semper enim tellus, sit amet euismod lacus luctus dignissim. Donec
            ornare sem ut mauris pulvinar, a convallis lorem faucibus. Donec
            elementum rutrum libero. Nunc efficitur dolor justo, in luctus diam
            blandit in. Cras malesuada in elit et viverra. Phasellus eu libero
            purus. Fusce elementum ut elit sit amet tristique. Nullam id dapibus
            quam. Curabitur in ornare diam, sit amet volutpat massa. Cras quis
            tellus nibh.
          </p>
        </div>
      </div>
      <div className="container pt-5">
        <div className="d-flex flex-row justify-content-center flex-wrap">
          <h5 className="tech">react</h5>
          <h5 className="tech">python</h5>
          <h5 className="tech">javascript</h5>
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
