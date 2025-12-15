import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import Preloader from './Preloader';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import VideoShowcase from './VideoShowcase';
import Contact from './Contact';
import './homepage.css';
import './navbar.css';
import './fonts.css';
import initializeBlobity from './blobityConfig';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { GiOpenBook } from "react-icons/gi";

import videoPort from './images/VideoPort.png';
import laptopBg from './images/LaptopBG.png';
import Map from './images/VideoPort2.png';
import mapBg from './images/LaptopBG2.png';
import Kue from './images/VideoPort3.png';
import kueBg from './images/LaptopBG3.png';
import video1 from './images/video1.png';
import video1Gif from './images/video1.gif';
import video2 from './images/video2.png';
import video2Gif from './images/video2.gif';
import video3 from './images/video3.png';
import video3Gif from './images/video3.gif';

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
  const sectionRef = useRef(null);
  const section2Refs = [useRef(null), useRef(null), useRef(null)];
  const headingRef = useRef(null);
  const avatarRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const navbarRef = useRef(null);
  const section3Ref = useRef(null);
  const splitTextRef = useRef(null);
  const descriptionRefs = [useRef(null), useRef(null), useRef(null)];
  const toolsRef = useRef(null);
  const contactTitleRef = useRef(null);
  const contactTextRefs = [useRef(null), useRef(null)];
  const contactSocialRefs = [useRef(null), useRef(null)];

  const laptopImgRefs = [useRef(null), useRef(null), useRef(null)];
  const projectInfoRefs = [useRef(null), useRef(null), useRef(null)];
  const projectIconsRefs = [useRef(null), useRef(null), useRef(null)];

  const video1GifRef = useRef(null);
  const video2GifRef = useRef(null);
  const video3GifRef = useRef(null);
  const videoSectionRef = useRef(null);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const handlePreloaderEnd = () => {
    setLoading(false);
  };

  const handleMouseEnter = (gifRef) => {
    gifRef.current.src = gifRef.current.src;
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

      section2Refs.forEach((ref, index) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.fromTo([laptopImgRefs[index].current, projectInfoRefs[index].current, projectIconsRefs[index].current],
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
            );
          },
        });
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

      // GSAP video section
      gsap.fromTo(videoSectionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: videoSectionRef.current, start: 'top 90%', once: true } }
      );

      videoRefs.forEach((ref, index) => {
        gsap.fromTo(ref.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: index * 0.2, scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true } }
        );
      });

      // ScrollTrigger for active nav link
      const sections = ['home', 'projects1', 'projects2', 'projects3', 'video-showcase', 'about', 'contact'];
      sections.forEach((id, index) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveNav(index),
          onEnterBack: () => setActiveNav(index),
          onLeave: () => setActiveNav(-1),
          onLeaveBack: () => setActiveNav(-1),
        });
      });

      return () => {
        blobity.destroy();
        ScrollTrigger.kill();
      };
    }
  }, [loading]);

  // State to keep track of the active nav link
  const [activeNav, setActiveNav] = useState(0);

  //Lenis Button click scroll ease
  const handleScrollTo = (id, index) => {
    setActiveNav(index);
    const target = document.getElementById(id);
    lenis.scrollTo(target, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  };

  const handleOpenBookClick = () => {
    lenis.scrollTo('research', { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  };

  const projects = [
    {
      sectionRef: section2Refs[0],
      laptopImgRef: laptopImgRefs[0],
      projectInfoRef: projectInfoRefs[0],
      projectIconsRef: projectIconsRefs[0],
      bgImage: laptopBg,
      projectImage: videoPort,
      title: "Social Media Portfolio",
      description: "Personal Portfolio showcasing videos I've edited.",
      tags: "JAVASCRIPT  BOOTSTRAP  ANIMATE.CSS",
      links: [
        { url: "https://github.com/Mikeyy01/EditingShowcase", tooltip: "Project Repo", icon: <FaGithub /> },
        { url: "https://editing-showcase-qq4j7icl0-mikeyy01s-projects.vercel.app/", tooltip: "View Website", icon: <FaExternalLinkAlt /> },
        { url: "https://drive.google.com/file/d/1CrGE6eIBiwx9StGPnN8QrffIccS9zD6q/view", tooltip: "Research Process", icon: <GiOpenBook />, onClick: handleOpenBookClick }
      ]
    },
    {
      sectionRef: section2Refs[1],
      laptopImgRef: laptopImgRefs[1],
      projectInfoRef: projectInfoRefs[1],
      projectIconsRef: projectIconsRefs[1],
      bgImage: mapBg,
      projectImage: Map,
      title: "Community Interactive Map",
      description: "Map where citizens can report problems or leave suggestions regarding a certain area.",
      tags: "LEAFLET  REACT  SURVEY.JS",
      links: [
        { url: "https://github.com/Mikeyy01/eind_intern", tooltip: "Project Repo", icon: <FaGithub /> },
        { url: "https://youtu.be/_IaGCMJSFAI", tooltip: "Video Walkthrough", icon: <TbMovie /> },
        { url: "#", tooltip: "Research Process", icon: <GiOpenBook />, onClick: handleOpenBookClick },
        { url: "https://youtu.be/_IaGCMJSFAI", tooltip: "View Website", icon: <FaExternalLinkAlt /> }
      ]
    },
    {
      sectionRef: section2Refs[2],
      laptopImgRef: laptopImgRefs[2],
      projectInfoRef: projectInfoRefs[2],
      projectIconsRef: projectIconsRefs[2],
      bgImage: kueBg,
      projectImage: Kue,
      title: "Kue",
      description: "Kue is a web app which allows the user to request a song to the DJ with a click of a button.",
      tags: "REACT  SPOTIFY.API",
      links: [
        { url: "https://git.fhict.nl/I476238/kue/", tooltip: "Project Repo", icon: <FaGithub /> },
        { url: "https://www.youtube.com/watch?v=IX5ZLV0LYSs", tooltip: "Video Commercial", icon: <TbMovie /> }
      ]
    }
  ];

  const videos = [
    {
      link: "https://youtu.be/HtW-QuUeaVY",
      thumbnail: video1,
      gif: video1Gif,
      title: "Waddle Ad",
      gifRef: video1GifRef
    },
    {
      link: "https://www.youtube.com/watch?v=BvwRs632UT8",
      thumbnail: video2,
      gif: video2Gif,
      title: "$50,000 Island",
      gifRef: video2GifRef
    },
    {
      link: "https://www.youtube.com/watch?v=pTXcpIg58rE",
      thumbnail: video3,
      gif: video3Gif,
      title: "All Star Football",
      gifRef: video3GifRef
    }
  ];

  return (
      <div className="port" style={{ height: '100vh' }}>
        {loading && <Preloader onEnd={handlePreloaderEnd} />}
        {!loading && (
            <div>
              <Navbar activeNav={activeNav} handleScrollTo={handleScrollTo} />
              <Section1
                  sectionRef={sectionRef}
                  headingRef={headingRef}
                  avatarRef={avatarRef}
                  bottomLeftRef={bottomLeftRef}
                  bottomRightRef={bottomRightRef}
              />
              {projects.map((project, index) => (
                  <Section2
                      key={index}
                      sectionRef={project.sectionRef}
                      laptopImgRef={project.laptopImgRef}
                      projectInfoRef={project.projectInfoRef}
                      projectIconsRef={project.projectIconsRef}
                      bgImage={project.bgImage}
                      projectImage={project.projectImage}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      links={project.links}
                  />
              ))}
              <VideoShowcase
                  videoRefs={videoRefs}
                  videoSectionRef={videoSectionRef}
                  handleMouseEnter={handleMouseEnter}
                  videos={videos}
              />
              <Section3 descriptionRefs={descriptionRefs} toolsRef={toolsRef} />
              <Contact
                  contactTitleRef={contactTitleRef}
                  contactTextRefs={contactTextRefs}
                  contactSocialRefs={contactSocialRefs}
              />
            </div>
        )}
      </div>
  );
};

export default App;
