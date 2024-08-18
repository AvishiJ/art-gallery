import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <div className="navbar-icon-left">
                    <span className="navbar-icon search-icon"></span>
                </div>
                <div className="navbar-logo">Art Gallery</div>
                <div className="navbar-icon-right">
                    <span className="navbar-icon heart-icon"></span>
                </div>
            </div>
            <div className={`navbar-links-container ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="navbar-links">
                    <li>Category</li>
                    <li>Reviews</li>
                    <li>Newsletter</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
                <span className="menu-icon"></span>
            </div>
        </nav>
    );
}

export default Navbar;
