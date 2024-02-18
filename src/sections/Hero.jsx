import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="section row">
      <div className="d-flex justify-content-center align-items-center">
        <div className="container d-flex flex-row row">
          <div className="col d-flex flex-column align-items-end">
            <h1>joshua chow</h1>
            <h3>{"<full-stack software engineer />"}</h3>
          </div>
          <div className="col d-flex flex-column align-items-start">
            <h1>right</h1>
            <h3>headline 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
