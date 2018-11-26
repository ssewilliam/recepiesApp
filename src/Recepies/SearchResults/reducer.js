import {
  FETCHING_RECIPE_FAIL,
  FETCHING_RECIPE_START,
  FETCHING_RECIPE_SUCCESS
} from './Constants';

export const initialState = {
  isLoading: false,
  isFetchingRecipes: false,
  recipes: [],
  error: ''
};
const MealRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCHING_RECIPE_START:
    return {
      ...state,
      isLoading: true,
      isFetchingRecipes: true,
    };
  case FETCHING_RECIPE_SUCCESS:
    return {
      ...state,
      isLoading: false,
      isFetchingRecipes: false,
      recipes: action.payload,
      error:''
    };
  case FETCHING_RECIPE_FAIL:
    return {
      ...state,
      isLoading:false,
      isFetchingRecipes:false,
      recipes:[],
      error: action.payload
    };
  default: return state;
  }
};

export default MealRecipesReducer;
