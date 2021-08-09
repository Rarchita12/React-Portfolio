import React from "react";

import projectsList from "../../projects.js";
import "bootstrap/dist/css/bootstrap.min.css";
//Project Section Render
function Project() {
  return (
    <section>
      <div className="project">
        <h1 className="topic">My Projects</h1>
      </div>

      <div className="wrapper">
        {projectsList.map((project) => (
          <div className="card">
            <div className="img-container">
              <img alt={project.name} src={project.image} />
            </div>
            <div className="content">
              <p className="project-title" id="card-title">
                {project.name}
              </p>

              <p>
                <a className="links" href={project.github}>
                  GitHub&nbsp;
                </a>
                <a className="links" href={project.deploy}>
                  Depolyed Application&nbsp;
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
