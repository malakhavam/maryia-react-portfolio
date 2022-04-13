import React, { Component } from "react";
import {
  Layout,
  Header,
  Navigation,
  Content,
  Drawer,
} from "react-mdl";
import Footer from "./components/Footer.js";
import "./App.css";
import Routes from "./utils/Routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout fixedHeader>
            <Header
              className="header-color"
              title={
                <span>
                  <strong>Maryia Malakhava</strong>
                </span>
              }
            ></Header>
            <Drawer>
              <Navigation>
                <Link to="/">Welcome</Link>
                <Link to="/aboutme">About Me</Link> 
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content className="body-color">
              <div className="page-content" />
              <Routes />
            </Content>
          </Layout>
        </div>
        <Footer />
      </div>
      
    );
  }
}
export default App;