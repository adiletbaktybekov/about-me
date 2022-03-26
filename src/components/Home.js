import React from 'react';
import {IconContext} from "react-icons";
// import {IoCallOutline, IoPersonCircleSharp, IoLogoWhatsapp} from "react-icons/io5";
import {IoPersonCircleSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import ReactIcon from "../assets/img/React-icon.svg.png"
import BootIcon from "../assets/img/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67.png"
import ResponsiveIcon from "../assets/img/iconfinder-icon-9-cover-icon-original.webp"
import ReduxIcon from "../assets/img/redux-283024.webp"
import SassIcon from "../assets/img/1200px-Sass_Logo_Color.svg.png"

const Home = () => {
    return (
        <section id="home" style={{background: "src"}}>
            <div className="container">
                <div className="home">
                    <Carousel variant="dark">
                        <Carousel.Item interval={1000}>
                        <div className="home-about d-flex justify-content-center">
                            <div className="home-about-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-6 my-5 my-5 ">
                                        <IconContext.Provider
                                            value={{color: "white", className: "home-about-content-img"}}>
                                            <div>
                                                <IoPersonCircleSharp className=""/>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="col-6 my-4">
                                        <h1 className="home-about-content-title">Адилет Бактыбеков</h1>
                                        <p className="home-about-content-desc">Front-end React JS
                                            разработчик</p>
                                        <p className="home-about-content-desc2">Меня зовут Адилет...</p>
                                    </div>
                                </div>
                                <Link to="/about-me">
                                    <button className="home-btn">Подробнее</button>
                                </Link>
                            </div>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                        <div className="home-about d-flex justify-content-center">
                            <div className="home-about-content">
                                <h1 className="home-about-content-title2 my-5">Мои навыки, которые я изучал</h1>
                                <div className="home-about-content-skills d-flex justify-content-around">
                                    <div className="home-about-content-skills-name">
                                        <div className="home-about-content-skills-name-asset">
                                            <img src={BootIcon} className="home-about-content-skills-name-asset-img"
                                                 alt=""/></div>
                                        <div className="home-about-content-skills-name-asset">
                                            <p className="home-about-content-skills-name-asset-desc">Bootstrap</p>
                                        </div>
                                    </div>
                                    <div className="home-about-content-skills-name ">
                                        <div className="home-about-content-skills-name-asset">
                                            <img src={ResponsiveIcon}
                                                 className="home-about-content-skills-name-asset-img" alt=""/>
                                        </div>
                                        <div className="home-about-content-skills-name-asset">
                                            <p className="home-about-content-skills-name-asset-desc">Адапивная
                                                верстка</p>
                                        </div>
                                    </div>
                                    <div className="home-about-content-skills-name">
                                        <div className="home-about-content-skills-name-asset">
                                            <img src={SassIcon} className="home-about-content-skills-name-asset-img"
                                                 alt=""/>
                                        </div>
                                        <div className="home-about-content-skills-name-asset">
                                        <p className="home-about-content-skills-name-asset-desc">Sass</p>
                                        </div>
                                    </div>
                                    <div className="home-about-content-skills-name">
                                        <div className="home-about-content-skills-name-asset">
                                            <img src={ReactIcon}
                                                 className="home-about-content-skills-name-asset-img" alt=""/>
                                        </div>
                                        <div className="home-about-content-skills-name-asset">
                                        <p className="home-about-content-skills-name-asset-desc">React JS</p></div>
                                    </div>
                                    <div className="home-about-content-skills-name">
                                        <div className="home-about-content-skills-name-asset">
                                            <img src={ReduxIcon}
                                                 className="home-about-content-skills-name-asset-img" alt=""/>
                                        </div>
                                        <div className="home-about-content-skills-name-asset">
                                        <p className="home-about-content-skills-name-asset-desc">Redux</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/skills">
                                    <button className="home-btn my-5">Подробнее</button>
                                </Link>
                            </div>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                        </Carousel.Item>
                        {/*<Carousel.Item>*/}
                        {/*<div className="home-about d-flex justify-content-center">*/}
                        {/*    <div className="home-about-content">*/}
                        {/*        <h1 className="home-about-content-title3 my-5">Как связаться со мной?</h1>*/}
                        {/*        <div className="row">*/}
                        {/*            <div className="home-about-content-icons col-6">*/}
                        {/*                <IconContext.Provider*/}
                        {/*                    value={{color: "white", className: ""}}>*/}
                        {/*                    <div>*/}
                        {/*                        <IoCallOutline className="home-about-content-img4"/>*/}
                        {/*                        <IoLogoWhatsapp className="home-about-content-img4"/>*/}
                        {/*                        <FaTelegram className="home-about-content-img4"/>*/}
                        {/*                        <p className="home-about-content-desc5 mx-4">Номер телефона</p>*/}
                        {/*                    </div>*/}
                        {/*                </IconContext.Provider>*/}
                        {/*            </div>*/}
                        {/*            <div className="home-about-content-icons col-6">*/}
                        {/*                <IconContext.Provider*/}
                        {/*                    value={{color: "white", className: ""}}>*/}
                        {/*                    <FaLinkedin className="home-about-content-img5"/>*/}
                        {/*                    <FaInstagram className="home-about-content-img5"/>*/}
                        {/*                    <FaGithub className="home-about-content-img5"/>*/}
                        {/*                </IconContext.Provider>*/}
                        {/*                <p className="home-about-content-desc5 mx-4">Cоц.сети</p>*/}
                        {/*            </div>*/}
                        {/*            <p className="home-about-content-desc7">Чтобы связаться со мной нажмите эту*/}
                        {/*                кнопку</p>*/}
                        {/*        </div>*/}
                        {/*        <Link to="/about-me">*/}
                        {/*            <button className="home-btn">Подробнее</button>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<Carousel.Caption>*/}
                        {/*</Carousel.Caption>*/}
                        {/*</Carousel.Item>*/}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Home;