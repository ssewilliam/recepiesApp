import React from 'react';
import './SearchResults.scss';


export const SearchResults = () => (
  <div className="resultsWrapper">
    <div className="resultsBody">
      <div className="recepeThumbnail">
        <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg" alt="Thumbnail"/>
      </div>
      <div className="recepeData">
        { /* eslint-disable-next-line */ }
        <span><a href="#">Name</a></span>
        <span>Category</span>
        <span>Small</span>
        { /* eslint-disable-next-line */ }
        <span><a href="#">How to make a dish</a></span>
      </div>
    </div>
  </div>
);
