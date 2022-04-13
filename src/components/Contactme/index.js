import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";


class Contactme extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        
        <div className="container" id="mainContainer">
          <Grid className="landing-grid">
            <Cell col={12}>
              <div className="banner-text">
                <h2>Contact Me</h2>

                <p>
                  <Button>
                    <a id="email" href="mailto:malakhava@yahoo.com">
                      Email: malakhava@yahoo.com
                    </a>
                  </Button>
                </p>
                <p>
                  <Button id="phone">Phone : +1-843-754-3502</Button>
                </p>
                <p>
                  <Button id="address">Address: 9337 Glenburn Lane, Charlotte, NC 28278</Button>
                </p>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contactme;