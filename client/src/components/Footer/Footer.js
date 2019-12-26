import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" src="assets/img/react-logo.png"/></span> Clicky Game!</li>
                <li>© 2019 David Levens</li>
                <li><a href="https://github.com/Davidlevens/Clicky-Game" target="blank"><span><img className='logo' src="assets/img/github-mark.png"/></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer;