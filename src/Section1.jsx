import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Section1 = ({ sectionRef, headingRef, avatarRef, bottomLeftRef, bottomRightRef }) => {
    return (
        <section className="section1" ref={sectionRef} id="home">
            <div className="top-left">
                <a href="https://drive.google.com/file/d/11uhziv0tidDnZFqkZuNkT3Njrizt8R3j/view" target="_blank" className="resume-button" data-blobity>VIEW RESUME</a>
            </div>
            <div className="top-right">
                <a href="https://github.com/Mikeyy01" className="social-link" data-blobity>
                    <FaGithub style={{ color: '#E4DED7', fontSize: '1em', marginRight: '8px' }} />GitHub
                </a>
                <a href="https://linkedin.com/in/michael-asl" className="social-link" data-blobity>
                    <FaLinkedin style={{ color: '#E4DED7', fontSize: '1em', marginRight: '8px' }} />LinkedIn
                </a>
            </div>
            <div className="content">
                <h1 ref={headingRef}>MICHAEL<br />ASLANIDIS</h1>
                <img ref={avatarRef} src="/images/profile.png" alt="profile avatar" className="avatar" />
            </div>
            <div className="bottom-left" ref={bottomLeftRef}>
                <p>Professional Video Editor &<br />Aspiring Front-End Developer</p>
            </div>
            <div className="bottom-right" ref={bottomRightRef}>
                <p>Dedicated to crafting immersive video <br />edits and engaging front-end <br />experiences.</p>
            </div>
        </section>
    );
};

export default Section1;
