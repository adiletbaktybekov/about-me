import React from 'react';
import {IconContext} from "react-icons";
import AVA from "../assets/img/photo_2022-03-07_20-44-19.jpg"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    {/*<div className="row">*/}
                        {/*<div className="col-6">*/}
                        <div className="about-name">
                            <div className="about-name-img">
                                <img src={AVA} className="about-name-img-1s" alt=""/>
                            </div>
                            <h1 className="about-name-title text-black mx-5 my-4">Адилет Бактыбеков</h1>
                            <p className="about-name-desc">Front-end React JS разработчик</p>
                            {/*</div>*/}
                        </div>
                        <div className="about-post">
                            <ul className="about-post-ul1 my-1">
                                - Личная информация
                                <li className="about-post-li text-black my-2">ФИО: Мамасыдыков Адилет Бактыбекович</li>
                                <li className="about-post-li text-black my-2">Место проживания: Кыргызстан, Бишкек</li>
                            </ul>
                            <ul className="about-post-ul2 my-5">- О себе
                                <li className="about-post-li2 text-black">
                                    Меня зовут Адилет.
                                    Всегда готов развивать себя.

                                    За последние годы я интересуюсь сферой IT.
                                    Выбрал программирование, точнее Frontend разработчик.

                                </li>
                            </ul>
                            <ul className="about-post-ul3  my-5">- Мои цели
                                <li className="about-post-li2 text-black">

                                    Продолжать расти и построить каьеру программиста.
                                    Изучить несколько языков программирования.
                                    За 5 года изучать английский язык, работать в зарубежных IT компаниях.
                                </li>
                            </ul>
                        </div>
                    </div>
{/*/*/}
{/*                </div>*/}
                <div className="about-btns d-flex justify-content-center">
                    <Link to="/">
                        <button className="about-btns-btn">
                            <IconContext.Provider
                                value={{color: "black", className: "home-about-content-img"}}>
                                <div>
                                    <AiOutlineArrowLeft className="about-btns-btn-icon"/>
                                </div>
                            </IconContext.Provider>
                        </button>
                    </Link>
                    <Link to="/skills">
                        <button className="about-btns-btn">
                            <IconContext.Provider
                                value={{color: "black", className: "home-about-content-img"}}>
                                <div>
                                    <AiOutlineArrowRight className="about-btns-btn-icon"/>
                                </div>
                            </IconContext.Provider>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;