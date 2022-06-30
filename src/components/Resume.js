import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                  

                <p class="mt-5">
                <a href="https://linkedin.com/in/maryia-malakhava-ba50309b">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn"/></a>
                </p>
               
               <h3><a href="https://www.linkedin.com/in/maryia-malakhava-ba50309b/overlay/1635490072051/single-media-viewer/"
                      class="link"
                      target="_blank"
                      rel="noopener noreferrer">View Resume</a></h3>
               
               <h3>Full Stack Web Developer</h3>
              <hr></hr>

              <h5>
                HTML | CSS | Material-UI | JavaScript | NodeJS | SQL | MongoDB |
                Express | React | C++
              </h5>
              <div className="icons">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-node-js"></i>
                <i class="fab fa-react"></i>
                <i class="fab fa-cuttlefish"></i>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Resume;