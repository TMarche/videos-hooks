import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {

    console.log(videos)
    const videoList = videos.map((video) => {
        return <VideoItem video={video} />;
    });

    return (
        <div>
            {videoList}
        </div>
    );
}

export default VideoList;