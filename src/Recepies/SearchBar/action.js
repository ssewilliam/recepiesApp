import axios from 'axios';

import {
  FETCHING_RECIPES_FAIL,
  FETCHING_RECIPES_START,
  FETCHING_RECIPES_SUCCESS
} from './Constants';

export const fetchRecipesStart = () => {
  return {
    type: FETCHING_RECIPES_START
  };
};

export const fetchRecipesSuccess = recipe => {
  return {
    type: FETCHING_RECIPES_SUCCESS,
    payload: recipe
  };
};

export const fetchRecipesFail = error => {
  return {
    type: FETCHING_RECIPES_FAIL,
    payload: error
  };
};

export const fetchRecipe = (name) => {
  return dispatch => {
    dispatch(fetchRecipesStart());
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => dispatch(fetchRecipesSuccess(response.data.meals)))
      .catch(error => dispatch(fetchRecipesFail(error)));
  };
};

export default fetchRecipe;