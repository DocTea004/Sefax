import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-heading">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-sub">
            <div className="contact-flex">
                
                <div className="contact-left">
                    <p>Give Us A Call</p>
                    <h3>+233 242 172 448 /+233 507 065 082</h3>
                </div>

                <div className="contact-middle">
                    <p>Send Us A Mail</p>
                    <h3>sefax247@gmail.com</h3>
                </div>

                <div className="contact-right">
                    <p>Locate Us</p>
                    <h3>Atomic Down Roundabout Dome</h3> 
                </div>

            </div>
            </div>
        </div>
    )
}

export default Contact
