import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <span className="navbar-icon search-icon"></span>
                </div>
                <div className="navbar-center">
                    <h1 className="navbar-logo">Studio</h1>
                    <ul className="navbar-links">
                        <li>Prints</li>
                        <li>Originals</li>
                        <li>Art Objects</li>
                        <li>Shop by Artist &#9662;</li>
                        <li>Gift Cards</li>
                        <li>About &#9662;</li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <span className="navbar-icon heart-icon"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
