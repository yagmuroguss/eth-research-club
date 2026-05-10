import { useState, useEffect } from 'react';
import logoeth from '../assets/logoeth.png';
import "./navbar.css";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const nav = document.querySelector('.navbar');
            if (nav && !nav.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClick);
        }

        return () => document.removeEventListener('mousedown', handleClick);
    }, [isOpen]);

    return (
        <nav className="navbar">
            <img src={logoeth} style={{width: '50px'}} />
            <div className="navbar-phone" onClick={() => setIsOpen(!isOpen)}>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                <li><a href="#events" onClick={() => setIsOpen(false)}>Events</a></li>
                <li><a href="#members" onClick={() => setIsOpen(false)}>Members</a></li>
                <li><a href="#advisors" onClick={() => setIsOpen(false)}>Advisors</a></li>
                <li><a href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
}