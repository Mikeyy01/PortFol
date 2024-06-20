import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import Preloader from './Preloader';
import './homepage.css';
import './navbar.css';
import './fonts.css';
import initializeBlobity from './blobityConfig';
import { FaFilePdf, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { GiOpenBook } from "react-icons/gi";
import videoPort from './images/VideoPort.png';
import laptopBg from './images/LaptopBG.png';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  ScrollTrigger.update();
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const App = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const section2Ref = useRef(null);
  const headingRef = useRef(null);
  const avatarRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const navbarRef = useRef(null);
  const section3Ref = useRef(null);
  const splitTextRef = useRef(null);
  const descriptionRefs = [useRef(null), useRef(null), useRef(null)];
  const toolsRef = useRef(null);
  const contactSectionRef = useRef(null);
  const contactTitleRef = useRef(null);
  const contactTextRefs = [useRef(null), useRef(null)];
  const contactSocialRefs = [useRef(null), useRef(null)];

  const laptopImgRef = useRef(null);
  const projectInfoRef = useRef(null);
  const projectIconsRef = useRef(null);

  const handlePreloaderEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(sectionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo([headingRef.current, avatarRef.current],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4, stagger: 0.2 }
      );

      gsap.fromTo([bottomLeftRef.current, bottomRightRef.current],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8, stagger: 0.2 }
      );

      gsap.fromTo(navbarRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 }
      );

      // Initializing Blobity
      const blobity = initializeBlobity();

      ScrollTrigger.create({
        trigger: section2Ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo([laptopImgRef.current, projectInfoRef.current, projectIconsRef.current],
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
          );
        },
      });

      // GSAP section 3
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

      //descriptions
      descriptionRefs.forEach((ref, index) => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: section3Ref.current,
            start: 'top 90%',
            once: true,
          }
        });
      });

      //tool section
      gsap.from(toolsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: section3Ref.current,
          start: 'top 90%',
          once: true,
        }
      });

      // GSAP contact section
      gsap.fromTo(contactTitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: contactTitleRef.current, start: 'top 90%', once: true } }
      );

      contactTextRefs.forEach((ref, index) => {
        gsap.fromTo(ref.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: index * 0.2, scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true } }
        );
      });

      contactSocialRefs.forEach((ref, index) => {
        gsap.fromTo(ref.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: index * 0.2, scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true } }
        );
      });

      return () => {
        blobity.destroy();
        ScrollTrigger.kill();
      };
    }
  }, [loading]);

  //Lenis Button click scroll ease
  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    lenis.scrollTo(target, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  };

  return (
      <div className="port" style={{ height: '100vh' }}>
        {loading && <Preloader onEnd={handlePreloaderEnd} />}
        {!loading && (
            <div ref={contentRef}>
              <section className="section1" ref={sectionRef} id="home">
                <div className="top-left">
                  <a href="https://drive.google.com/file/d/1D4qgzvED932p6RTfhCFVCB8QXCAU0lDL/view" target="_blank" className="resume-button" data-blobity>VIEW RESUME</a>
                </div>
                <div className="top-right">
                  <a href="https://github.com/Mikeyy01" className="social-link" data-blobity>GitHub</a>
                  <a href="https://linkedin.com/in/michael-asl" className="social-link" data-blobity>LinkedIn</a>
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
              <nav className="fixed-navbar" ref={navbarRef}>
                <a href="https://drive.google.com/file/d/1D4qgzvED932p6RTfhCFVCB8QXCAU0lDL/view" target="_blank" data-blobity-tooltip="View CV">
                  <FaFilePdf />
                </a>
                <a onClick={() => handleScrollTo('home')}>Home</a>
                <a onClick={() => handleScrollTo('projects')}>Projects</a>
                <a onClick={() => handleScrollTo('about')}>About</a>
                <a onClick={() => handleScrollTo('contact')}>Contact</a>
              </nav>
              <section className="section2" ref={section2Ref} id="projects">
                <div className="laptop-background" ref={laptopImgRef}>
                  <img src={laptopBg} alt="Laptop background" className="laptop-bg" />
                  <img src={videoPort} alt="Portfolio on laptop" className="video-port" />
                </div>
                <div className="project-info" ref={projectInfoRef}>
                  <div className="project-icons" ref={projectIconsRef}>
                    <div className="icon-circle" data-blobity><FaGithub /></div>
                    <div className="icon-circle" data-blobity><TbMovie /></div>
                    <div className="icon-circle" data-blobity><GiOpenBook /></div>
                    <div className="icon-circle" data-blobity><FaExternalLinkAlt /></div>
                  </div>
                  <div className="project-details">
                    <h2>Video Portfolio</h2>
                    <p>Personal Portfolio showcasing videos I've edited.</p>
                    <p className="project-tags">JAVASCRIPT  BOOTSTRAP  ANIMATE.CSS</p>
                  </div>
                </div>
              </section>
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
              <div className="contact-section" ref={contactSectionRef} id="contact">
                <h2 className="contact-title" ref={contactTitleRef}>LET'S TALK</h2>
                <div className="contact-content">
                  <div className="contact-left">
                    <p className="contact-text" ref={contactTextRefs[0]}>GOT A QUESTION OR WANT TO WORK <br /> ON SOMETHING TOGETHER?</p>
                    <a href="mailto:m.aslanidis.03@gmail.com" className="contact-email" ref={contactTextRefs[1]}>SEND ME AN EMAIL</a>
                  </div>
                  <div className="contact-right">
                    <a href="https://github.com/Mikeyy01" className="contact-social" ref={contactSocialRefs[0]}>GitHub</a>
                    <a href="https://linkedin.com/in/michael-asl" className="contact-social" ref={contactSocialRefs[1]}>LinkedIn</a>
                  </div>
                </div>
                <div className="footer">
                  <hr />
                  <p className="footer-text">© 2024 Aslanidis, Inc. All Rights Reserved.</p>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default App;
