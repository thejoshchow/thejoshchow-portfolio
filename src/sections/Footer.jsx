import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="d-flex flex-column align-items-center justify-content-center p-3">
        <div className="pt-1">
          <a
            className="p-2 linkedin"
            href="https://www.linkedin.com/in/thejoshchow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/linkedin.png" alt="linkedin icon" width="22px" />
          </a>
          <a
            className="p-2 github"
            href="https://www.github.com/thejoshchow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/github.png" alt="github icon" width="22px" />
          </a>
          <a className="p-2 mail" href="mailto:thejoshchow@gmail.com">
            <img src="img/email.png" alt="mail icon" width="22px" />
          </a>
        </div>
        {/* <div className="pt-2 small">designed and coded by me, josh</div> */}
        <div className="pt-2 small">thanks for visiting</div>
      </div>
    </section>
  );
};

export default Footer;
