import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="resume-background">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.imgur.com/A4GHcbm.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Alex Møller</h2>
            <h4 style={{color: 'grey'}}>Ongoing programmer education</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am 17 years old, I haven't tried having a real job with programming yet, but i do have some other experiences. I've been programming since i was around 10 years old. I picked up the interest quickly and started on learning batch. Since that i've continued to show interrest in programming, and started learning multiple languages.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Møllevej 7, Thorsø 8881</p>
            <h5>Phone</h5>
            <p>+45 60306086</p>
            <h5>Email</h5>
            <p>alexmoller02@hotmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Boarding school"
              schoolDescription="Before Aarhus Tech I went to a boarding school called BGI Akademiet. I was there mainly because of the parkour opportunities, I finished 9th grade there too"
               />

            <Education
              startYear={2019}
              endYear={2025}
              schoolName="Aarhus Tech"
              schoolDescription="I started at Aarhus Tech after summer in 2019, where i chose the path called 'It, medie og teknik'. I chose this because i want to be a programmer, I really like to code from nothing, and turn it into either a website or a piece of software"
               />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Apprenticed in IBM"
              jobDescription="I was apprenticed in IBM for a week in 2019. I went trough a week where i tried to work like the programmers would inside IBM. I made the first webiste i had ever done in React and Node.js. I also made a chatbot for the webiste. Since that i've been working With react rather that HTML/CSS"
              />


              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={20}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={30}
                    />
                    <Skills
                      skill="React"
                      progress={30}
                      />

                    <Skills
                      skill="Python"
                      progress={30}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
