import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const VideoShowcase = ({ videoRefs, videoSectionRef, handleMouseEnter, videos }) => {
    return (
        <div className="video-showcase" id="video-showcase">
            <h2 ref={videoSectionRef}>Videos I've Edited</h2>
            <div className="video-grid" ref={videoSectionRef}>
                {videos.map((video, index) => (
                    <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="video-item" data-no-blobity ref={videoRefs[index]} onMouseEnter={() => handleMouseEnter(video.gifRef)}>
                        <img src={video.thumbnail} alt={`Video ${index + 1}`} className="video-thumbnail" />
                        <img src={video.gif} alt={`Video ${index + 1} Gif`} className="video-gif" ref={video.gifRef} />
                        <div className="video-info">
                            <p className="video-title" data-blobity>{video.title} <IoIosArrowForward /></p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default VideoShowcase;
