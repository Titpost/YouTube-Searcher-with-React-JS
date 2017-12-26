import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAsVIDcwdBi-VROB79QPDbxMKL0TL0Xw4M';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
    })
  }
  
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

React.render(<App />, document.querySelector('.container'));