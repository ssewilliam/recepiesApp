import axios from 'axios';
import { searchByName } from '../../appUrls';

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

export const fetchRecipes = (name) => {
  return dispatch => {
    dispatch(fetchRecipesStart());
    return axios
      .get(searchByName(name))
      .then(response => dispatch(fetchRecipesSuccess(response.data.meals)))
      .catch(error => dispatch(fetchRecipesFail(error)));
  };
};

export default fetchRecipes;