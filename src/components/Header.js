import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <Link to="/"><p className="header-logo my-3">ADILET</p></Link>
                    {/*<nav className="header-nav navbar mx-5 py-1">*/}
                    {/*    /!*<Link to="/about-me" className="header-nav-item col-md-4-h2 col-md-4-h3">О себе</Link>*!/*/}
                    {/*    /!*<NavLink to="/skills" className="header-nav-item">Навыки</NavLink>*!/*/}
                    {/*    /!*<NavLink to="/contacts" className="header-nav-item">Контакты</NavLink>*!/*/}
                    {/*</nav>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;