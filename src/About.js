
import React from 'react';
import { Link } from "react-router-dom";

function About() {

const styleLink = {
        color: "var(--primary-fontColor)",
};

  return (  
    <div className="about-page">
        <div className="heading">
            <h1>About</h1>
            
            <h2>Hi there! I'm Ankita.</h2>
            
            <div className="bodyEm">Currently I am on my journey of learning web development.  I would like to document this beautiful journey. I have created some technical blogs. You can check out those blogs listed on <Link className="link-animation" style={styleLink} to="/myblogs">My blogs</Link> page. 
            <br /><br/>
            I have created a <Link className="link-animation" style={styleLink} to="/search">Search blogs</Link> page to check out interesting blogs of other people.</div>
            <br></br>
            
            <div className="bodyEm"><strong>Technology:</strong> This app is created using React-JS. Used <a className="link-animation" rel="noreferrer" href="https://docs.dev.to/api/#tag/articles" target="_blank">Dev.to</a> API to fetch blogs content.</div>
        </div>
            
    </div>
  );

}

export default About;
