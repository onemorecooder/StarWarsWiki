import React from "react";
import logo from '../img/star.png';

function Header() {
    return (
        <nav>
            {/* <h1 className="logo">Logo</h1> */}
            <img className="logo" alt='logo' src={logo}></img>
            <ul className="nav-links">
                <li>
                    <a href="/a">Inicio</a>
                </li>
                <li>
                    <a href="/acerca-de">Acerca de</a>
                </li>
                <li>
                    <a href="/contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
