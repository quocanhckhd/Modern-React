import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import axios from 'axios';
import VideoDetail from './VideoDetail';

class App extends Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSubmit('tree');
    }

    onSubmit = async value => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',
        {   
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDOkLmKxh8ihEiQ1PazezwgqZUYCtfXdsI',
                q: value
            }
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        console.log(this.state.videos);
    }

    onVideoSelect = value => {
        this.setState({ selectedVideo: value });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="elevent wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;