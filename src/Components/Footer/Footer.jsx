import React, { useState } from 'react';
import './Footer.css'
import logo from '../../assets/sayed.jpg';
import user_icon from '../../assets/user_icon.svg'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMailOpen } from "react-icons/io5";

const Footer = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <div className='footer' data-aos="fade-up" data-aos-duration="1000">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className='sayed' src={logo} alt="logo" />
                    <p>I’m a passionate web developer creating modern, responsive, and user-friendly websites using HTML, CSS, Bootstrap, JavaScript, and React. Let’s build something amazing together!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="user" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className={`footer-subscribe ${isSubscribed ? 'success' : ''}`} onClick={handleSubscribe}>
                        {isSubscribed ? 'Subscribed! ✓' : 'Subscribe'}
                    </div>
                </div>
            </div>

            <div className="footer-social">
                <a href="mailto:mdabusayedbinamin@gmail.com" className="social-icon gmail">
                    <IoMailOpen />
                </a>
                
                <a href="https://www.facebook.com/mdabusayedbinamin" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook /></a>
                <a href="https://www.instagram.com/sayed_official07" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
                <a href="https://x.com/hasanbdsayed" target="_blank" rel="noreferrer" className="social-icon"><FaTwitter /></a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
                <a href="https://github.com/abusayed09" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
            </div>

            <hr />

            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    © 2026 MD ABU SAYED. All rights reserved.
                </p>

                <div className="footer-bottom-center">
                    <p className="dev-text">
                        Designed and Developed by <span className="typing-text">MD ABU SAYED BIN AMIN</span>
                    </p>
                </div>

                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;