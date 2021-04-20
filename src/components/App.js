import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    render() {
        return (
            <div className="ui container segment">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        {/* Use 11 out of 16 columns to display */}
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.onTermSubmit('guitar')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        console.log("From the App!", video);
        this.setState({selectedVideo: video});
    }

}

export default App;