import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
function About() {
    return(
<MDBContainer className="mt-5">
<MDBRow>
  <MDBCol md="12">
    <h2>About Me</h2>
    <hr class="solid bg-dark" />
    <img
      style={{ height: "285px" }}
      src="https://avatars.githubusercontent.com/u/64818454?v=4"
      class="float-left pr-4 pb-3 img-fluid"
      alt="Maryia Malakhava"
    />
    <h5 style={{ fontSize: "27px"}}>
    I am Full Stack Web Developer, just graduated from The Coding Boot Camp at UNC Charlotte.
    As a problem solver who loves facing challenges in my work, 
    I'm excited to be at the deployment phase of this new career. 
    I'm passionate and ambitious about my work, and love to be on a team that questions possibilities. 
    My technical skills include: HTML, CSS, Javascript, React, Redux, Mongo, Website deployment, C++. 
    </h5>
  
  </MDBCol>
</MDBRow>
</MDBContainer>

)}
  
export default About;