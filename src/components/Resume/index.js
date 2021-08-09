import React from "react";
import resumeDoc from "../../assets/images/Resume.docx";
//Render Resume Section
function Resume() {
  return (
    <section class="mb-5">
      <h1 className="resume topic">My Resume</h1>
      <a href={resumeDoc} class="link topic">
        resume
      </a>

      <div class="row justify-content-center" id="resume">
        <div class="mt-5 pl-5 pr-5">
          <h2>Proficiencies</h2>
          <ul>
            <p>Java </p>
            <p>JavaScript</p>
            <p>C/C++</p>
            <p>Assembly (MIPS)</p>
            <p>SQL</p>
            <p>Python</p>
            <p>Kafka</p>
            <p>GROK</p>
            <p>HDFS</p>
            <p>UML</p>
            <p>React</p>
            <p>HTML/CSS</p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
