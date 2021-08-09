import React from "react";
import { NavLink } from "react-router-dom";
//Nav Bar
function Navigation() {
  return (
    <div className=" navigation" id="navigation">
      <NavLink id="about" to="/about">
        About{" "}
      </NavLink>
      <NavLink to="/project">Project </NavLink>
      <NavLink to="/contact">Contact </NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </div>
  );
}

export default Navigation;
