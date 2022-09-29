import React, {Component} from 'react';
import './about.css';
import travelBuddy from './travel-buddy.jpg'
import rockPaperScissors from './rock-paper-scissors.jpg'
import Image from "react-bootstrap/Image";

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1>Learn more about me</h1>
                <section className="article">
                    <p>
                        Experienced in developing both backend and frontend for Web applications using modern technologies such as
                        Spring,  Java, Angular, React and JavaScript.
                    </p>
                    <p>Currently pursuing a Master's degree on Zagreb University of Applied Sciences in Software Engineering</p>
                </section>

                <p id="center-p">Here are some of my projects</p>

                <section className="projects">
                    <div className="project">
                        <div className="project-description">
                            <h1>Travel Buddy</h1>
                            <p>
                                Web application project using Java Spring Boot as REST API for backend and React.js library for frontend.
                            </p>
                        </div>
                        <Image className="project-image" src={travelBuddy}/>
                    </div>
                    <div className="project">
                        <div className="project-description">
                            <h1>Rock Paper Scissors</h1>
                            <p>
                                Project using JavaScript for game logic and displaying modal.
                            </p>
                        </div>
                        <Image className="project-image" src={rockPaperScissors}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
