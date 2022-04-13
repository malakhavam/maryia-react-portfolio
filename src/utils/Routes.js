import React from "react";
import LandingPage from "../components/Landingpage.js";
import Contact from "../components/Contactme.js";
import Projects from "../components/MyProjects.js";
import Resume from "../components/Resume.js";
import AboutMe from "../components/About.js";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/resume" component={Resume} /> 
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;