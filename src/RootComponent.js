import React, { Component } from 'react';
import SearchBar from './Recepies/SearchBar';
import SearchResults from './Recepies/SearchResults';

class RootComponent extends Component {
  render() {
    return (
      <div className="App">
        <h2>Recepies App</h2>
        <SearchBar />
        <hr/>
        <SearchResults />
      </div>
    );
  }
}

export default RootComponent;
