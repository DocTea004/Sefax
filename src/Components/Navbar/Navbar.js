import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import "./NavBar.css"


export default class Navbar extends Component {

    state={
        isOpen:false
    }

    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
   

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <button type="button" className="nav-btn">
                            <MenuIcon
                            onClick={this.handleToggle} 
                            className="nav-icon"
                            />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}  >
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/Cameras">
                                Work Reviews
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
