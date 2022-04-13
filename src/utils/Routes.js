import React from "react";
import LandingPage from "../components/Landingpage";
import Contact from "../components/Contactme";
import Projects from "../components/MyProjects";
import Resume from "../components/Resume";
import AboutMe from "../components/About";
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