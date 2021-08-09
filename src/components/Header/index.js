import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Project from "../Project";
import Resume from "../../components/Resume";

///Header
class Header extends Component {
  render() {
    return (
      <HashRouter>
        <div className="row Header" id="header">
          <Navigation />
        </div>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </div>
      </HashRouter>
    );
  }
}

export default Header;
