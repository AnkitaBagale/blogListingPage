import logo from "./logoBgWhite.png";
import { Link } from "react-router-dom";
import {React, useState} from 'react';

function Nav() {

    const [sideBar, setSideBar] = useState(false);

    return (
    
      <nav>
        
        <img className="logo" src={logo} alt="brandLogo"/>
        <div className={sideBar ? "burger cross" : "burger"}
        onClick={()=>{ setSideBar(!sideBar) }}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
        </div>
        
        <ul className={sideBar ? "nav-menu active" : "nav-menu"}>
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
