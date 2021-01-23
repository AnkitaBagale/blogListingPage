import React from 'react';
import logo from "./logoBgWhite.png";
import { Link } from "react-router-dom";


function Nav() {

    const styleLink = {
        color: "var(--primary-fontColor)",
        textDecoration : "none"
};

    return (
    <div>
      <nav>
        <img className="logo" src={logo} alt="brandLogo"/>
        <ul>
            <Link style={styleLink} to="/myblogs">
                <li className="nav-links link-animation">My blogs</li>
            </Link>
            <Link style={styleLink} to="/search">
                <li className="nav-links link-animation">Search blogs</li>
            </Link>
          <li><a className="nav-links link-animation" href="#footer">Contact us</a></li>
        </ul>
      </nav>
    </div>
  );

}

export default Nav;
