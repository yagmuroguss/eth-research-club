import { useState } from 'react';
import logoeth from '../assets/logoeth.png';
import "./navbar.css";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <img src={logoeth} style={{width: '50px', marginRight: 'auto'}} />
            <div className="navbar-phone" onClick = {() => setIsOpen(!isOpen)}>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#members">Members</a></li>
                <li><a href="#advisors">Advisors</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

