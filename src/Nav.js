import {React, useState} from 'react';
import logo from "./logoBgWhite.png";
import { Link } from "react-router-dom";


function Nav() {

    return (
    
      <nav>
        
        <img className="logo" src={logo} alt="brandLogo"/>
        {/* <div className="burger">
            <div className="line line1"></div>
            <div className="line line1"></div>
            <div className="line line1"></div>
        </div> */}
        
        <ul className="nav-menu">
            <Link className="styleForLink" to="/myblogs">
                <li className="nav-links link-animation">My blogs</li>
            </Link>
            <Link className="styleForLink"  to="/search">
                <li className="nav-links link-animation">Search blogs</li>
            </Link>
            <Link className="styleForLink" to="/about">
                <li className="nav-links link-animation">About</li>
            </Link>
        </ul>

      </nav>
    
  );

}

export default Nav;
