import React from 'react';
import logo from '../assets/images/i2c-logo.png';

const Footer = () => {

    return (
        <div className='my-container'>
            <div className='footer-line-seperator'></div>
            <footer className='footer'>
                <div className="logo">
                    <img src={logo} alt="Company Logo" style={{ height: '34px',width: '55px' }} loading='lazy' />
                </div>
                <div className="links">
                    <a href="#FAQs" className="n_links">FAQs</a>
                    <a href="#Privacy-Policy" className="n_links">Privacy Policy</a>
                    <a href="#Other" className="n_links">Other</a>
                    <a href="#contact" className="n_links contact-btn">Contact us</a>
                </div>
            </footer>
            <div className='copy-rights'>Copyright © 2023 i2c inc. All rights reserved.</div>
        </div>
    );
}

export default Footer;
