import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-social">
                    <a href="/a">
                        <FaTwitter size={30} className="social-icon" />
                    </a>
                    <a href="/a">
                        <FaFacebook size={30} className="social-icon" />
                    </a>
                    <a href="/a">
                        <FaInstagram size={30} className="social-icon" />
                    </a>
                </div>
                <p className="footer-text">Star Wars API</p>
            </div>
        </footer>
    );
}

export default Footer;
