import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.imgur.com/A4GHcbm.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Alex Møller</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React | NodeJS | Python</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/alex-m%C3%B8ller-077695193/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/alex_moller02/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100011185788377" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
