import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About GreenLeaf</h2>
                    <p>
                        GreenLeaf is your one-stop<br/> supermarket for all your needs.
                    </p>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <div className="contact-details-branch1">
                        <p>Email: galle@greenleaf.com</p>
                        <p>Phone: 0912256876</p>
                        <p>Address: No 25, Karapitiya Rd, Galle</p>
                    </div>
                   
                </div>
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} GreenLeaf | All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
