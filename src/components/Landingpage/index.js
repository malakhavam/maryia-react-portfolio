import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h2>Hello! My name is Maryia!</h2>
              <br />
              <br />
              <br />
              <h3>Full Stack Web Developer</h3>
              <hr></hr>

              <p>
                HTML | CSS | Material-UI | JavaScript | NodeJS | SQL | MongoDB |
                Express | React
              </p>
              <div className="icons">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3"></i>

                <i class="fab fa-js-square"></i>
                <i class="fab fa-node-js"></i>
                <i class="fab fa-react"></i>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <div className="social-links">
                <a
                  href="https://github.com/malakhavam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-git-square" aria-hidden="true"></i>
                </a>

                <a
                  href="https://linkedin.com/in/maryia-malakhava-ba50309b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landingpage;
