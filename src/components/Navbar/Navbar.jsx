import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './navbar.styles.css';

const NavBar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Flight Scan</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Flights</a></li>
                        <li><a href="badges.html">Hotels</a></li>
                        <li><a href="collapsible.html">Cars</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;