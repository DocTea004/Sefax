import React from 'react';
import "./Services.css";
import SecurityCamera from "../../Image/icons/security_camera.svg";
import AutomaticDoor from "../../Image/icons/automatic_door.svg";
import AutomaticGate from "../../Image/icons/automatic_gate.svg";
import BarbedWire from "../../Image/icons/barbed_wire.svg";
import ElectricFence from "../../Image/icons/electric_fence.svg";
import FeedbackControl from "../../Image/icons/feedback_control.svg";
import GarageDoor from "../../Image/icons/garage_door.svg";



function Services() {
    return (
        <div className="services">
            <h2>Our Services</h2>

            <div className="services-desc">
                <p>We provide a wide range of services</p>
                <p>Contact us for any of our services</p>
            </div>

            <div className="services-icons">
                <img
                className="security-camera"
                src={SecurityCamera}
                />
                <img
                className="automatic-door"
                src={AutomaticDoor}
                />
                <img
                className="automatic-gate"
                src={AutomaticGate}
                />
                <img
                className="barbed-wire"
                src={BarbedWire}
                />
            </div>

            <div className="serv-icons">
                <img 
                className="electric-fence"
                src={ElectricFence}
                />
                <img 
                className="electric-fence"
                src={FeedbackControl}
                />
                <img 
                className="electric-fence"
                src={GarageDoor}
                />
            </div>
        </div>
    )
}

export default Services
