import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SearchResults.scss';
import NotFound from '../../assets/appImages/notfound.png';
import ContentLoader from './RecipesLoader';


export const SearchResults = ({ recipes, loading }) => {
  return(
    <div className="resultsWrapper">
      <h4> {
        recipes ? 'Recipe Results Matched' : 'Recipe Results'
      }
      </h4>
      {
        recipes ?
          recipes.map(recipe => (
            <div key={recipe.idMeal} className="resultsBody">
              <div className="recepeThumbnail">
                <img
                  src={`${recipe.strMealThumb}`}
                  onError={(event) => {
                    event.target.src = `${NotFound}`;
                  }}
                  alt="Thumbnail"/>
              </div>
              <div className="recepeData">
                <span><a href={recipe.strSource}  target="blank">{recipe.strMeal}</a></span>
                <span>{recipe.strCategory}</span>
                <span>{recipe.strArea}</span>
                <span>
                  <a href={recipe.strYoutube} target="blank">
                    Watch video on how to make <b>{recipe.strMeal}</b>
                  </a>
                </span>
              </div>
            </div>
          ))
          :
          loading && !recipes ? <ContentLoader /> :(
            <div className="resultsBody">
              <center>There are no recipies matching keyword</center>
            </div>
          )
      }
    </div>
  );
};

SearchResults.propTypes = {
  recipes: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    recipes: state.MealRecipesReducer.recipes,
    loading: state.MealRecipesReducer.isLoading
  };
};

export default connect(mapStateToProps)(SearchResults);
