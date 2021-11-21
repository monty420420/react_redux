import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = 'AIzaSyD6cHeSuYBQ_VA4Jcbo2QGFN4xNwXZH320';
class App extends Component {
   constructor(props) {
       super(props);

       this.state = { videos : []  };

       YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos });
        //this.setState({ videos: videos }); key와 value가 같을때 위와 같이 하나로 작성가능
    });
   }

    render() {
    return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

// Take this component's generated HTML and pit it
// on the page (in the DOM) //(전달할 것, 전달될 장소)
                
ReactDOM.render(<App />, document.querySelector('.container'));
