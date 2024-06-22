import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { GiOpenBook } from "react-icons/gi";

const Section2 = ({ sectionRef, laptopImgRef, projectInfoRef, projectIconsRef, bgImage, projectImage, title, description, tags, links }) => {
    return (
        <section className="section2" ref={sectionRef}>
            <div className="laptop-background" ref={laptopImgRef}>
                <img src={bgImage} alt="Laptop background" className="laptop-bg" />
                <img src={projectImage} alt="Portfolio on laptop" className="video-port" />
            </div>
            <div className="project-info" ref={projectInfoRef}>
                <div className="project-details">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p className="project-tags">{tags}</p>
                    <div className="project-icons" ref={projectIconsRef}>
                        {links.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="icon-circle" data-blobity-tooltip={link.tooltip} onClick={link.onClick}>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
