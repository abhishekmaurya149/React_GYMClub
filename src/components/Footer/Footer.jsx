import React from 'react'
import Github from '../../assets/Github.png';
import Instagram from '../../assets/Instagram.png';
import LinkedIn from '../../assets/Linkedin.png';
import Logo from '../../assets/Logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer-container">
                <hr />
                <div className="footer">
                    <div className="social-links">
                        <img src={Github} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={LinkedIn} alt="" />
                    </div>

                    <div className="logo-f">
                        <img src={Logo} alt="" />
                    </div>
                </div>

                <div className="blur blur-f-1"></div>
                <div className="blur blur-f-2"></div>
            </div>
        </>
    )
}

export default Footer
