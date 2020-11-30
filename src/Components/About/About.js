import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";
import {Card}  from "react-bootstrap";

function About() {
    return (
        <div class="comp-about">

           <div className="comp-about-flex">
            <div className="comp-about-left">

                <div className="comp-about-heading">
                    <h3>About Us</h3>
                </div>

                <div className="comp-about-cont-description">
                    <p>
                    We are into the supply and installation of electric fencing systems, 
                    razor wire, cctv, intruders alarm , fire alarm, automatic doors, 
                    sliding /swing gate, garage doors system & voice entry access control system.
                    </p>
                </div>

                <div className="comp-about-link">
                    <li>
                        <Link to="/About">
                           Read More
                        </Link>
                    </li>
                </div>

            </div>

            <div className="comp-about-right">
                <Card.Img 
                className="about-comp-image"
                src={require('../../Image/about.jpg')}
                />
            </div>
           </div>
        </div>
    )
}

export default About
