import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRecipe from './selectors';
import './SearchResults.scss';


export class SearchResult extends Component {
  render(){
    const { recipes, recipeName, onFetch } =  this.props;
    onFetch(recipeName);
    return(
      <div className="resultsWrapper">
        <div className="resultsBody">
          <h2>{recipeName}</h2>
          <div className="recepeThumbnail">
            {/* <img src={strMealThumb} alt="Thumbnail"/> */}
          </div>
          <div className="recepeData">
            {/* <span><a href={strSource}>Name</a></span>
            <span>Category</span>
            <span>Small</span>
            <span><a href={strYoutube}>How to make a dish</a></span> */}
          </div>
        </div>
      </div>
    );
  };
}
const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  };
};
// const onFetch;
export const mapDispatchToProps = (onFetch, dispatch) => (
  (recipeName) => dispatch(fetchRecipe(recipeName))
);

SearchResult.propTypes = {
  onFetch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
