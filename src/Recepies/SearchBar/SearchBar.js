import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';


const SearchBar = ({ fetchRecipeByName }) => {
  return (
    <div>
      <input type="text" onChange={(event) => fetchRecipeByName(event.target.value)} className="" placeholder="search recepies by name" />
    </div>
  );
};

SearchBar.propTypes = {
  fetchRecipeByName:PropTypes.func
};

export default SearchBar;
