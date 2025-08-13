import React from 'react';
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ activeNav, handleScrollTo }) => {
    return (
        <nav className="fixed-navbar">
            <a href="https://drive.google.com/file/d/11uhziv0tidDnZFqkZuNkT3Njrizt8R3j/view" target="_blank" data-blobity-tooltip="View CV">
                <FaFilePdf />
            </a>
            <a onClick={() => handleScrollTo('home', 0)} className={activeNav === 0 ? 'active' : ''}>Home</a>
            <a onClick={() => handleScrollTo('projects1', 1)} className={activeNav >= 1 && activeNav <= 3 ? 'active' : ''}>Projects</a>
            <a onClick={() => handleScrollTo('video-showcase', 4)} className={activeNav === 4 ? 'active' : ''}>Editing</a>
            <a onClick={() => handleScrollTo('about', 5)} className={activeNav === 5 ? 'active' : ''}>About</a>
            <a onClick={() => handleScrollTo('contact', 6)} className={activeNav === 6 ? 'active' : ''}>Contact</a>
        </nav>
    );
};

export default Navbar;
