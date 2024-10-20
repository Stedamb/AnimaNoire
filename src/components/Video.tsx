import { useState, useRef } from "react";
import { video } from "../data/video.ts";

const Video = () => {
    return (
        <div className="h-screen lazyload shaded">
            <video
                className=""
                autoPlay
                muted
                loop>
                <source src={video.source} type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
            <div className="mix-blend-lighten absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150 z-10">
                <img 
                    src="/logo.svg"
                    alt="Logo"
                    width="640" 
                    height="640" 
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Video;
