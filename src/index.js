import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAsVIDcwdBi-VROB79QPDbxMKL0TL0Xw4M';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
})

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

React.render(<App />, document.querySelector('.container'));