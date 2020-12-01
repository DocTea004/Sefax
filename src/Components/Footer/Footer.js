import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            
            <div className="footer-flex">
                
                <div className="footer-left">
                    <h3>24/7 SOUND & SECURED SECURITY SERVICES LIMITED</h3>
                </div>

                <div className="footer-middle">
                    <li>
                        <Link to="/">
                            <p> > Home</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/About">
                            <p> > About Us</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Cameras">
                            <p> > Our Products</p>
                        </Link>
                    </li>

                    
                </div>

                <div className="footer-right">
                    <div className="footer-recent">
                        <h3>Recent Works</h3>
                    </div>

                    <div className="footer-image">
                        <img
                        className="foot-image"
                        src={require('../../Image/recent_work.jpg')}
                        />
                        <img
                        className="foot-image"
                        src={require('../../Image/recent_.jpg')}
                        />
                        <img
                        className="foot-image"
                        src={require('../../Image/recent_.jpg')}
                        />
                    </div>

                    <div className="footer-images">
                        <img
                        className="foot-image"
                        src={require('../../Image/recent_w.jpg')}
                        />
                        <img
                        className="foot-image"
                        src={require('../../Image/recent_wo.jpg')}
                        />
                        <img
                        className="foot-image"
                        src={require('../../Image/recent_wor.jpg')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
