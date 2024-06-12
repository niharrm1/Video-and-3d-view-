import React, { useState, useEffect, useRef } from 'react';
import './video.css';


import video1 from '../../public/screen1.mp4';
import video2 from '../../public/screen2.mp4';
import video3 from '../../public/screen3.mp4';
import video4 from '../../public/screen4.mp4';
import video5 from '../../public/screen5.mp4';
import video6 from '../../public/screen6.mp4';
import video7 from '../../public/screen7.mp4';
import video8 from '../../public/screen8.mp4';

const VideoPlayer = ({ videoUrl, isSelected, onClick }) => {
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        onClick(videoUrl);
    };

    return (
        <div className={`video-player ${isSelected ? 'selected' : ''}`} onClick={handleVideoClick}>
            <video ref={videoRef} loop autoPlay muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const VideoPlayerRow = ({ videoUrls, selectedVideoUrl, onVideoClick }) => {
    return (
        <div className="video-row">
            {videoUrls.map((videoUrl, index) => (
                <VideoPlayer
                    key={index}
                    videoUrl={videoUrl}
                    isSelected={videoUrl === selectedVideoUrl}
                    onClick={onVideoClick}
                />
            ))}
        </div>
    );
};

const MultiVideoPlayer = ({ showForm }) => {
    const [videos, setVideos] = useState({
        firstRow: [],
        secondRow: []
    });
    const [loading, setLoading] = useState(true); // State variable to track loading state
    const [currentTime, setCurrentTime] = useState(new Date()); // State variable to hold current time
    const [selectedVideo, setSelectedVideo] = useState(null); // State variable to track the selected video

    useEffect(() => {
        // Function to update current time
        const updateTime = () => {
            setCurrentTime(new Date());
        };

        // Update the time every second
        const timer = setInterval(updateTime, 1000);

        // Clear the timer on component unmount
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (showForm) {
            setVideos({
                firstRow: [],
                secondRow: []
            });
            setLoading(true); // Set loading to true when fetching new videos
            console.log("2")
            setTimeout(() => { // Simulating loading delay
                setVideos({
                    firstRow: [video5, video6],
                    secondRow: [video7, video8]
                });
                setLoading(false); // Set loading to false after videos are fetched
            }, 2000); 
        } else {
            setVideos({
                firstRow: [video1, video2],
                secondRow: [video3, video4]
            });
            setLoading(false); // Set loading to false when not fetching new videos
            console.log("1")
        }
    }, [showForm]);

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const firstRowVideos = selectedVideo ? [selectedVideo] : videos.firstRow;
    const remainingVideos = selectedVideo ? videos.firstRow.filter(url => url !== selectedVideo).concat(videos.secondRow) : videos.secondRow;

    return (
        <div>
            {loading ? ( // Render loader if loading state is true
                <div className="loader">Loading...</div>
            ) : (
                <div className="multi-video-player">
                    <VideoPlayerRow videoUrls={firstRowVideos} selectedVideoUrl={selectedVideo} onVideoClick={handleVideoClick} />
                    <VideoPlayerRow videoUrls={remainingVideos} selectedVideoUrl={selectedVideo} onVideoClick={handleVideoClick} />
                </div>
            )}

          
        </div>
    );
};

export default MultiVideoPlayer;
