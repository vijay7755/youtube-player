import React from 'react';
import SearchBar from './SearchBar';
import Youtube from './../APIs/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        console.log('componentDidMount')
        this.onTermSubmit('wild elephants');
    }

    onTermSubmit = async (term) => {
        console.log('term: ',term)
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response);

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;