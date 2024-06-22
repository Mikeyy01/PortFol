import React, { useRef, useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3 = ({ descriptionRefs, toolsRef }) => {
    const section3Ref = useRef(null);
    const splitTextRef = useRef(null);

    useEffect(() => {
        if (section3Ref.current && splitTextRef.current) {
            const text = new SplitType(splitTextRef.current, { types: 'words, chars' });

            gsap.from(text.chars, {
                opacity: 0,
                y: '100%',
                rotationZ: 10,
                duration: 0.5,
                stagger: { each: 0.03 },
                scrollTrigger: {
                    trigger: section3Ref.current,
                    start: 'top 90%',
                    once: true,
                }
            });

            descriptionRefs.forEach((ref) => {
                if (ref.current) {
                    gsap.from(ref.current, {
                        opacity: 100,
                        y: 20,
                        duration: 0.6,
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: section3Ref.current,
                            start: 'top 90%',
                            once: true,
                        }
                    });
                }
            });

            if (toolsRef.current) {
                gsap.from(toolsRef.current, {
                    opacity: 100,
                    y: 20,
                    duration: 0.6,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: section3Ref.current,
                        start: 'top 90%',
                        once: true,
                    }
                });
            }
        }
    }, [descriptionRefs, toolsRef]);

    return (
        <div className="section3" ref={section3Ref} id="about">
            <h2 id="section-title" ref={splitTextRef}>
                CREATING STUNNING<br />
                VIDEOS AND UNLEASHING<br />
                FRONT-END MAGIC.
            </h2>
            <div className="content-wrapper">
                <div id="section-content">
                    <p className="section-description" id="description1" ref={descriptionRefs[0]}>
                        When I'm not immersed in the captivating world of video editing, you'll find me diving into the
                        fascinating realm of front-end development, eagerly exploring new technologies and frameworks.
                    </p>
                    <p className="section-description" id="description2" ref={descriptionRefs[1]}>
                        My passion for both video editing and front-end development drives me to constantly learn and grow
                        in the tech industry.
                    </p>
                    <p className="section-description" id="description3" ref={descriptionRefs[2]}>
                        Now, I am excited to embrace front-end development as the next step in my career, combining my
                        enthusiasm for creativity and my love for cutting-edge technology to craft visually stunning and
                        user-friendly web applications.
                    </p>
                </div>
                <div id="tools" ref={toolsRef}>
                    <div className="tool-section" id="frontend-tools">
                        <h3 className="tools-title">Front-end Tools</h3>
                        <p className="tools-list">JavaScript(ES6), React, TypeScript, Git/GitHub.</p>
                    </div>
                    <div className="tool-section" id="ui-libraries">
                        <h3 className="tools-title">UI Libraries</h3>
                        <p className="tools-list">SASS, Tailwind CSS, Framer Motion, Bootstrap.</p>
                    </div>
                    <div className="tool-section" id="design-tools">
                        <h3 className="tools-title">Design Tools</h3>
                        <p className="tools-list">Figma, Adobe XD, Adobe Photoshop, Adobe After Effects, UX Research, UI
                            Design, Prototyping.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
