import React from 'react';
import AboutPic from '../assets/images/aboutme.jpg';
import ReactDOM from 'react-dom';
import '../assets/styles/aboutme.css';

class AboutMe extends React.Component {
  render() {
    return (
        <div>
            <div class="about-container">
                <img src={AboutPic} class="about-img"></img>
                <div class="about-section">
                    <h2 class="about-title">About Sara</h2>
                    <p> Hi, I'm Sara! I'm a 3rd year Software Engineering student at the University of Waterloo.</p>
                    <p> I'm passionate about Product Management, User Experience Design, and Front-End Development. 
                        At the end of the day, my goal is to create innovative solutions and understand the user's 
                        point-of-view to deliver a high-value product that user's can enjoy with ease. 
                    </p>
                    <p>Let's chat! ☕</p>
                    <div class="socials">
                        <a target="_blank" href="https://github.com/sarahosseini" class="social-logo"><i class="fa fa-github"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/sara-hosseini/" class="social-logo"><i class="fa fa-linkedin"></i></a>
                        <a target="_blank" href="mailto: sara.hosseini01@gmail.com" class="social-logo"><i class="fa fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="about-container">
                <div class="about-section">
                    <h2 class="about-subtitle">Noteworthy Skills</h2>
                    <p>C++ • C • Python • JavaScript • HTML • CSS • React • Git • SQL • Figma • Sketch 
                        • Personas • Prototyping • Wireframing • A/B Testing • User Research • User Stories 
                        • Data Analysis • Product Roadmaps • Tableau • Microsoft Office Suite 
                        • Jira • Trello • Agile Methodologies</p>
                </div>
                <div class="about-section">
                    <h2 class="about-subtitle">"Sara's in depth knowledge of development paired with her ability to lead a team makes her an incredible asset on any team as a product manager."</h2>
                    <p> — Eric Gordon [Innovation Solutions Lead @ WSIB Lab]</p>
                </div>
            </div>
        </div>
    )
  }
}

export default AboutMe