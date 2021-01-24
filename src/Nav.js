import React from 'react';
import logo from "./logoBgWhite.png";
import { Link } from "react-router-dom";


function Nav() {

    const styleLink = {
        color: "var(--primary-fontColor)",
        textDecoration : "none"
};

    return (
    
      <nav>
        <img className="logo" src={logo} alt="brandLogo"/>
        <ul>
            <Link style={styleLink} to="/myblogs">
                <li className="nav-links link-animation">My blogs</li>
            </Link>
            <Link style={styleLink} to="/search">
                <li className="nav-links link-animation">Search blogs</li>
            </Link>
            <Link style={styleLink} to="/about">
                <li className="nav-links link-animation">About</li>
            </Link>
        </ul>
      </nav>
    
  );

}

export default Nav;
