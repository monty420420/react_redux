import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyD6cHeSuYBQ_VA4Jcbo2QGFN4xNwXZH320';
class App extends Component {
   constructor(props) {
       super(props);

       this.state = {
           videos: [],
           selectedVideo: null
       };

      this.videoSearch('surfboards');
   }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
    return (
    <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />        
    </div>
    );
  }
}

// Take this component's generated HTML and pit it
// on the page (in the DOM) //(전달할 것, 전달될 장소)
                
ReactDOM.render(<App />, document.querySelector('.container'));
