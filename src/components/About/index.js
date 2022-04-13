import React, { Component } from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <Grid className="landing-grid">
          <Cell col={12}></Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe