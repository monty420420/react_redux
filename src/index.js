import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyD6cHeSuYBQ_VA4Jcbo2QGFN4xNwXZH320';

// Create a new component,this component should produce
//some HTML
const App = function() {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and pit it
// on the page (in the DOM) //(전달할 것, 전달될 장소)
                
ReactDOM.render(<App />, document.querySelector('.container'));
