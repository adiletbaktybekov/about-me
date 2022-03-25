import React from 'react';
import {IconContext} from "react-icons";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";

const Contacts = () => {
    return (
        <div>
            <div className="about-btns">
                <Link to="/skills">
                    <button className="about-btns-btn">
                        <IconContext.Provider
                            value={{color: "black", className: "home-about-content-img"}}>
                            <div>
                                <AiOutlineArrowLeft className="about-btns-btn-icon"/>
                            </div>
                        </IconContext.Provider>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Contacts;