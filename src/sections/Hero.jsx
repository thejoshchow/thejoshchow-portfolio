import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="section row">
      <div className="d-flex justify-content-center align-items-center">
        {/* <div className="container d-flex row flex-wrap"> */}
        <div className="col-12 col-lg-6 d-flex flex-column align-items-end p-3">
          <h1 className="typed">joshua chow</h1>
          <h3>{"<full-stack software engineer />"}</h3>
          <div className="d-flex flex-row">
            <a
              className="mx-3"
              href="https://linkedin.com/in/thejoshchow"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="img/linkedin.png"
                alt="..."
                width="45px"
                height="45px"
              />
            </a>
            <a
              className="mx-3"
              href="https://github.com/thejoshchow"
              target="_blank"
              rel="noreferrer"
            >
              <img src="img/github.png" alt="..." width="45px" hegiht="45px" />
            </a>
            <a className="mx-3" href="mailto:thejoshchow@gmail.com">
              <img src="img/email.png" alt="..." width="45px" height="45px" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-start"></div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
