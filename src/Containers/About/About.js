import React from 'react';
import "./About.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {Card} from "react-bootstrap";


function About() {
    return (
        <div class="about">
            <div className="about-us">
                <h1>About Us</h1>
            </div>
            <div 
            className="about-imagecont">
                <Card.Img
                class="img-fluid w-0.5 h-0.5 img-responsive center-block d-block mx-auto"
                src={require('../../Image/sefa.jpg')}
                style={{
                    width:'500px',
                    boxShadow: '0px 2px 3px rgba(51, 30, 30, 0.13) ,1px 2px 2px rgba(44, 14, 14, 0.1) , -1px -2px 2px rgba(0,0,0,.05) ',
                    boxShadow: '10px',
                }}
                />
            </div>

            <div className="about-description">
                <p>
                I’m <span>Mr.Augustine Sefah </span> 
                the owner and managing director of 
                <span> 24/7 SOUND AND SECURED SECURITY SERVICES LTD </span> 
                I'm 38 years of age, born and raised at the Kwahu-Afram Plains. 
                I attended my basic school at Tease Presby J.H.S and my Secondary Education
                at Mpraeso Secondary School between 1997 and 1999 December.
                I came into Security Installation and Sales Job in 2007, trained at AZALES ENT.
                Until I completed my training and education, then I moved on to establish 24/7 SOUND AND SECURED SECURITY SERVICES LTD. 
                24/7 SOUND AND SECURED SECURITY SERVICES LTD has rendered a lot of excellent services to industries,
                companies and individuals and also diplomatic missions to cooperate organizations to name but few.
                Some of our referrals are the 
                XLIS DEVELOPERS LTD BLACK ROCK ESTATES DEVELOPERS, ECOBLOCK ETC AND A HOST OF INDIVIDUALS AND BANKS LIKE ZENITH BANK to mention but few.
                Our aim is to help combat armed robbery attempts in our homes and establishments, 
                provide risk free environment for all ages. Alleviate thievery in our communities a back-up information for customers
                to be able to have a backup video of their premises in case of the unforeseen contingencies on their hard disk.

                </p>
            </div>
            <div className="about-contact">
                <h3>Contact Us </h3>
               <div className="Phone">

                <div className="phone-icon">
                <PhoneIcon  />
                </div>
                <div className="phone-number">
                <p>+233 242 172 448 / +233 507 0650 82</p>
                </div>

               </div>
                <div className="Email">

                <div className="email-address">
                <EmailIcon  />
                </div>
                <div className="address">
                <p>sefax247@gmail.com</p>
                </div>

                </div>
            </div>

            <div className="about-follow">
                <h3>Follow us on</h3>
                <ul className="about-handles">
                    <li>
                        <a href="https://www.instagram.com/augustine.sefa/">
                        <InstagramIcon  
                            style={{
                                fontSize:'50px',
                                color:'red'
                            }}
                        />
                        </a>
                    </li>

                    <li>
                        <a href="https://web.facebook.com/augustine.sefa.50">
                        <FacebookIcon  
                        style={{
                                fontSize:'50px',
                            }} />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/august-sefa-743070147/">
                        <LinkedInIcon   
                            style={{
                                fontSize:'50px'
                            }}
                        />
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default About
