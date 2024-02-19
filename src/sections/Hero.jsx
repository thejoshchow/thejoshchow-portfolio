import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="section row">
      <div className="d-flex justify-content-center align-items-center">
        {/* <div className="container d-flex row flex-wrap"> */}
        <div className="col-xl-6 d-flex flex-column align-items-end">
          <h1 className="typed">joshua chow</h1>
          <h3>{"<full-stack software engineer />"}</h3>
          <div className="d-flex flex-row">
            <a className="mx-3" href="https://linkedin.com/in/thejoshchow">
              <img src="img/linkedin.png" width="45px" height="45px" />
            </a>
            <a className="mx-3" href="https://github.com/thejoshchow">
              <img src="img/github.png" width="45px" hegiht="45px" />
            </a>
            <a className="mx-3" href="mailto:thejoshchow@gmail.com">
              <img src="img/email.png" width="45px" height="45px" />
            </a>
          </div>
        </div>
        <div className="col-xl-6 d-flex flex-column align-items-start"></div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
