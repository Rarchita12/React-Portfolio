import React from "react";
import AboutMePic from "../../assets/images/AboutMeavatar.png";
function About() {
  return (
    <section className="title">
      <h1 class="topic">About Me</h1>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img class="mb-5 aboutMe" src={AboutMePic} alt="Archita Racherla" />
          <p>
            Hello! Welcome to my Portfolio! My name is Archita Racherla and I am
            a coder from Texas! I enjoy learning new things and cutting edge
            technologies. Please look around this React website I made and feel
            free to contact me with any questions or comments!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
