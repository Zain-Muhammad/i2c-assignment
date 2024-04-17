import React from 'react';
import logo from '../assets/images/i2c-logo.png';
import breadcrumb from '../assets/images/breadcrumb.svg';
import arrowClose from '../assets/images/arrow-left-circle.svg';

const Navigation = () => {
    const openNav = () => {
        const element = document.getElementById("nav-mobile");
        element.classList.toggle("active");
    }

    return (
        <div className='header-wrapper'>
            <header id="nav-mobile">
                <div className="logo">
                    <img src={logo} alt="Company Logo" style={{ height: '34px',width: '55px' }} />
                </div>
                <div className="links">
                    <a href="#about" className="n_links" onClick={openNav}>About us</a>
                    <a href="#registration" className="n_links" onClick={openNav}>Registration</a>
                    <a href="#careers" className="n_links" onClick={openNav}>Careers</a>
                    <a href="#contact" className="n_links contact-btn" onClick={openNav}>Contact us</a>
                </div>
                <div className="f-m" onClick={openNav}>
                    <img src={arrowClose} alt="Menu Toggle" style={{ height: '50px', width: '50px' }} />
                </div>
            </header>
            <div className="f-m mobile" onClick={openNav}>
                <img src={breadcrumb} alt="Menu" />
                <img src={logo} alt="Company Logo" style={{ height: '34px',width: '55px' }} />
            </div>
        </div>
    );
}

export default Navigation;
