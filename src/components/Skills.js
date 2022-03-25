import React from 'react';
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "@react-icons/all-files/ai/AiOutlineArrowRight";
import {AiOutlineArrowLeft} from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import {IoLogoCss3, IoLogoGoogle, IoLogoHtml5, IoLogoJavascript, IoLogoSass} from "react-icons/io";
import {FaBootstrap, FaReact} from "react-icons/fa";
import {DiGithubBadge, DiResponsive} from "react-icons/di";
import {SiFuturelearn, SiRedux} from "react-icons/si";
import {RiTeamLine} from "react-icons/ri";
import {BsStar} from "react-icons/bs";
import {GiPikeman} from "react-icons/gi";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="skills">
                    <div className="grid-3 grid">
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <IoLogoHtml5 className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">HTML5</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <IoLogoCss3 className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">CSS3</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <FaBootstrap className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Bootstrap/Tailwind</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <IoLogoSass className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Sass</h2>
                        </div>

                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <DiResponsive className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Адаптивная верстка</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <DiGithubBadge className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Работа с Git и GitHub</h2>
                        </div>
                        <div className="grid-2 grid">
                        </div>
                    </div>

                    <div className="grid-3 grid">

                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <IoLogoJavascript className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">JavaScript</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <FaReact className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">React</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <SiRedux className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title"> Redux</h2>
                        </div>

                    </div>
                    <div className="grid-2 grid">

                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <IoLogoGoogle className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Умение гуглить на английском</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <RiTeamLine className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Умение работать в команде</h2>
                        </div>
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <BsStar className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Творческие способности</h2>
                        </div>

                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <SiRedux className="skill-icon"/>
                            </IconContext.Provider>
                            <h2 className="skill-title">Нацеленность на результат.</h2>
                        </div>
                    </div>
                    <div className="grid-1 grid">
                        <div className="skill">
                            <IconContext.Provider
                                value={{color: "white"}}>
                                <div className="d-flex flex-row">
                                    <GiPikeman className="skill-icon"/>
                                <SiFuturelearn className="skill-icon"/>
                                </div>
                            </IconContext.Provider>
                            <h2 className="skill-title">Постоянное желание осваивать новые технологии и инструменты</h2>
                        </div>
                    </div>
                </div>
                <div className="skills-btns">
                    <Link to="/about-me">
                        <button className="skills-btns-btn">
                            <IconContext.Provider
                                value={{color: "black", className: ""}}>
                                <div>
                                    <AiOutlineArrowLeft className="skills-btns-btn-icon"/>
                                </div>
                            </IconContext.Provider>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Skills;