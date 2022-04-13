import React from 'react';
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
    <p style={{ fontSize: "27px" }}>
    I am a full Stack Web Developer with a strong background in other fields
    such as dental medicine, accounting, office administration.
    </p>
  
  </MDBCol>
</MDBRow>
</MDBContainer>

)}
  
export default About;