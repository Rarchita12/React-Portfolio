import React from "react";
//import "../footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="img-link">
        <a href="https://github.com/priyaravi23" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/github-2.png"
            alt="Github"
            className="icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/priya-ravi-4508437b/"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a href="https://twitter.com/priyaravi231" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            alt="Twitter"
            className="icon"
          />
        </a>
      </div>
      <p className="footer-info">
        &copy; Priya Ravi |{" "}
        <a
          href="https://github.com/priyaravi23/react-portfolio/raw/master/src/assets/priya-resume.pdf"
          className="link"
        >
          download resume
        </a>{" "}
        |{" "}
        <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">
          color palette
        </a>{" "}
        | made with{" "}
        <img
          id="react-icon"
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React"
        />
      </p>
    </div>
  );
}

export default Footer;
