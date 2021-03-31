import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {
    const videoList = videos.map((video) => {
        return <VideoItem />;
    });

    return (
        <div>
            {videoList}
        </div>
    );
}

export default VideoList;