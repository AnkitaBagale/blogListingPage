import React from 'react';
import logo from "./logoBgWhite.png";

function Footer() {
    return (
    <div>
      <footer id="footer">
        <img className="logo" src={logo} alt="brandLogo"/>
        <div className="divider-line"></div>
        <div className="footer-bottom">
          <ul>
              <li className="footer-links link-animation">
                  <a href="https://github.com/AnkitaBagale">
                  <i className="fab fa-github" aria-hidden="true"></i>
                  </a>
              </li>
              <li className="footer-links link-animation">
                  <a href="https://twitter.com/AnkitaB1108">
                  <i className="fab fa-twitter"></i>
                  </a>
              </li>
              <li className="footer-links link-animation">
                  <a href="https://www.linkedin.com/in/ankita-bagale1108">
                  <i className="fab fa-linkedin-in"></i>
                  </a>
              </li>
              <li className="footer-links link-animation"><a href="https://www.instagram.com/ankitab1108/">
                <i className="fab fa-instagram"></i>
                </a>
              </li>
          </ul>
          <ul>
            <li><a className="nav-links link-animation" href="https://ankitabagale-portfolio.netlify.app/">Portfolio</a></li>
            <li><a className="nav-links link-animation" href="mailto:manali.bagale@gmail.com">Contact Us</a></li>
            <li><a className="nav-links link-animation">Terms of Use</a></li>
            <li><a className="nav-links link-animation">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );

}

export default Footer;
