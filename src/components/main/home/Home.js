import React, {Component} from 'react';
import './home.css';
import homeImg from './home-img.jpg';
import Image from "react-bootstrap/Image";

class Home extends Component{
    render() {
        return (
            <div className="my-container">
                <h1>Building modern and responsive Web Apps!</h1>
                <Image className="image" src={homeImg} roundedCircle/>
                <div id="menu-outer">
                    <div className="table">
                        <ul id="horizontal-list">
                            <li>HTML/CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Java</li>
                        </ul>
                    </div>
                </div>
                <div className="icons">
                    <i className="fab fa-twitter fa-4x"/>
                    <i className="fab fa-facebook fa-4x"/>
                    <i className="fab fa-linkedin fa-4x"/>
                </div>
            </div>
        );
    }
}

export default Home;
