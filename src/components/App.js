import React, { useEffect, useState } from "react";
import useVideos from '../hooks/useVideos';
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('guitar');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container segment">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    {/* Use 11 out of 16 columns to display */}
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;