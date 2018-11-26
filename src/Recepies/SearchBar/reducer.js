import {
  FETCHING_RECIPES_FAIL,
  FETCHING_RECIPES_START,
  FETCHING_RECIPES_SUCCESS
} from './Constants';

export const initialState = {
  isLoading: false,
  recipes: null,
  error: null
};
const MealRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCHING_RECIPES_START:
    return {
      ...state,
      isLoading: true
    };
  case FETCHING_RECIPES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      recipes: action.payload
    };
  case FETCHING_RECIPES_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };
  default: return state;
  }
};

export default MealRecipesReducer;
