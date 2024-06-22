import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = ({ contactTitleRef, contactTextRefs, contactSocialRefs }) => {
    return (
        <div className="contact-section" id="contact">
            <h2 className="contact-title" ref={contactTitleRef}>LET'S TALK</h2>
            <p className="availability-text">I'm Available For Work</p>
            <div className="contact-content">
                <div className="contact-left">
                    <p className="contact-text" ref={contactTextRefs[0]}>GOT A QUESTION OR WANT TO WORK <br /> ON SOMETHING TOGETHER?</p>
                    <a href="mailto:m.aslanidis.03@gmail.com" className="contact-email" ref={contactTextRefs[1]}>SEND ME AN EMAIL</a>
                </div>
                <div className="contact-right">
                    <a href="https://github.com/Mikeyy01" className="contact-social" ref={contactSocialRefs[0]}>
                        <FaGithub style={{ color: '#E4DED7', fontSize: '1em', marginRight: '8px' }} />GitHub
                    </a>
                    <a href="https://linkedin.com/in/michael-asl" className="contact-social" ref={contactSocialRefs[1]}>
                        <FaLinkedin style={{ color: '#E4DED7', fontSize: '1em', marginRight: '8px' }} />LinkedIn
                    </a>
                </div>
            </div>
            <div className="footer">
                <hr />
                <p className="footer-text">© 2024 Aslanidis, Inc. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Contact;
