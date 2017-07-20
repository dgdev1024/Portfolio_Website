///
/// \file   app.js
/// \brief  The frontend's primary component.
///

// Imports
import React from "react";
import Topbar from "./topbar";
import Showcase from "./showcase";
import ContactForm from "./contact";

///
/// \class  App
/// \brief  The frontend's primary component.
///
class App extends React.Component {
    onProjectCategoryChanged (ev) {
        this.setState({
            projectCategory: ev.target.value
        });
    }

    constructor (props) {
        super(props);
        this.state = {
            projectCategory: "frontend"
        };
    }

    render () {
        return (
            <div id="app">
                <Topbar />
                <div className="dwg-intro-bg" id="top">
                    <div className="dwg-intro-caption">
                        <span className="dwg-intro-heading">Dennis W. Griffin</span>
                        <span className="dwg-intro-subheading">
                            Web Developer<br />
                            Frontend | Backend | MERN Stack
                        </span>
                        <a className="dwg-intro-button" href="#about">Learn More</a>
                    </div>
                </div>
                <div className="dwg-about-me" id="about">
                    <img src="https://www.dropbox.com/s/iyt7ywo85w7i4aq/dennis.jpg?raw=1" title="Dennis Griffin" />
                    <div className="dwg-about-caption">
                        <span className="dwg-about-heading">About Me</span>
                        <p>
                            <a className="dwg-social" href="https://twitter.com/GuitarsNGames" target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="dwg-social" href="https://github.com/dgdev1024" target="_blank">
                                <i className="fa fa-github"></i>
                            </a>
                            <a className="dwg-social" href="https://codepen.io/dgdev1024/" target="_blank">
                                <i className="fa fa-codepen"></i>
                            </a>
                            <a className="dwg-social" href="https://www.freecodecamp.org/dgdev1024" target="_blank">
                                <i className="fa fa-free-code-camp"></i>
                            </a>
                        </p>
                        <p>
                            My name is Dennis Griffin. I am a web developer with experience in frontend and backend
                            development, with a deep background in native software development that has led me to
                            my primary focus in web development.
                        </p>
                        <p>
                            I am experienced with various frontend and backend web development technologies, including:
                        </p>
                        <ul>
                            <li>Javascript DOM</li>
                            <li>JQuery</li>
                            <li>React JS</li>
                            <li>Vue.js - <em>Learning</em></li>
                            <li>Bootstrap</li>
                            <li>Node.JS</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                </div>
                <div className="dwg-projects" id="projects">
                    <span className="dwg-projects-heading">My Projects</span>
                    <span className="dwg-projects-subheading">
                        Project Category: 
                        <select value={this.state.projectCategory} onChange={this.onProjectCategoryChanged.bind(this)}>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="full-stack">Full Stack</option>
                        </select>
                    </span>
                    <Showcase category={this.state.projectCategory} />
                </div>
                <div className="dwg-contact" id="contact">
                    <span className="dwg-contact-heading">Contact Me</span>
                    <div className="dwg-contact-info">
                        <p>
                            If you have any further questions about my focus as a web developer, 
                            would like to reach me for any work, or want to shoot a breeze with me, 
                            you can reach me at <a href="mailto:dgdev1024@gmail.com" target="_blank">
                            dgdev1024@gmail.com</a>.<br /><br />

                            You can also <a href="https://twitter.com/GuitarsNGames" target="_blank">
                            follow me on Twitter</a> to receive the latest updates on future projects
                            and improvements in my trade as a web developer.<br /><br />

                            If you would like, you can also reach me by firing off a message 
                            right here on the page. Enter your email, a subject, and your message, then hit
                            "Send Message".
                        </p>
                    </div>
                    <div className="dwg-contact-form">
                        <ContactForm />
                    </div>
                </div>
                <div className="dwg-footer">
                    <p>
                        Copyright &copy; 2017 Dennis Griffin<br />
                        Coded by Dennis Griffin
                    </p>
                </div>
            </div>
        );
    }
};

// Exports
export default App;