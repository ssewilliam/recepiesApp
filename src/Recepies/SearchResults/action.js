import {
  FETCHING_RECIPE_FAIL,
  FETCHING_RECIPE_START,
  FETCHING_RECIPE_SUCCESS
} from './Constants';

export const fetchRecipeStart = () => {
  return {
    type: FETCHING_RECIPE_START
  };
};

export const fetchRecipeSuccess = recipe => {
  return {
    type: FETCHING_RECIPE_SUCCESS,
    payload: recipe
  };
};

export const fetchRecipeFail = error => {
  return {
    type: FETCHING_RECIPE_FAIL,
    payload: error
  };
};
