import React from 'react';
import './Footer.css'
import logo from '../../assets/sayed.svg';
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className='sayed' src={logo} alt="" />
                    <p>I’m a passionate web developer creating modern, responsive, and user-friendly websites using HTML, CSS,Bootstrap, JavaScript,React. Let’s build something amazing together!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    © 2025 MD ABU SAYED.All right reserved
                </p>
                <div className="footer-bottom-right">
                    <p>Trem of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;