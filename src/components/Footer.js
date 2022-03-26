import React from 'react';
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";

import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="row">
                        <div className="footer-contacts col-6">
                            <Link to="/"><p className="footer-contacts-logo">ADILET</p></Link>
                            <div className="footer-contacts-links">
                                <Link to="/skills" className="footer-contacts-links-link">Навыки</Link>
                                <Link to="/about-me" className="footer-contacts-links-link">О себе</Link>
                            </div>
                        </div>
                        <div className="footer-contacts col-6">
                            <h1 className="footer-contacts-title">Как связаться со мной?</h1>
                            <div className="footer-contacts-icons">
                                <div className="footer-contacts-icons-cont">
                                    <IconContext.Provider
                                        value={{color: "black"}}>
                                        <IoLogoWhatsapp className="footer-contacts-icons-cont-icon"/>
                                        <p className="footer-contacts-icons-cont-title">Номер телефона:
                                            +996773514789</p>
                                    </IconContext.Provider>
                                </div>
                                <div className="footer-contacts-icons-cont">
                                    <IconContext.Provider
                                        value={{color: "black"}}>
                                        <FaInstagram className="footer-contacts-icons-cont-icon"/>
                                        <p className="footer-contacts-icons-cont-title">Instagram</p>
                                    </IconContext.Provider>
                                </div>
                                <div className="footer-contacts-icons-cont">
                                    <a href="https://www.instagram.com/kg_adilet_official/">
                                    <IconContext.Provider

                                        value={{color: "black"}}>
                                        <FaGithub className="footer-contacts-icons-cont-icon"/>
                                        <p className="footer-contacts-icons-cont-title">GitHub</p>
                                    </IconContext.Provider>
                                    </a>
                                </div>
                                <div className="footer-contacts-icons-cont">
                                    <IconContext.Provider
                                        value={{color: "black"}}>
                                        <FaLinkedin className="footer-contacts-icons-cont-icon"/>
                                        <a href="https://www.instagram.com/kg_adilet_official/"><p className="footer-contacts-icons-cont-title">LinkedIn</p></a>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="footer-about">Разработан от Adilet Baktybekov</h3>
            </div>
        </footer>
    );
};

export default Footer;