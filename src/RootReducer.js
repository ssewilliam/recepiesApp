import { combineReducers } from 'redux';

import MealRecipesReducer, * as recipesByNameSelector from './Recepies/SearchBar/reducer';

const RootReducer = combineReducers({
  MealRecipesReducer
});

export const recipesSelector = (state) => recipesByNameSelector.recipesSelector(state);

export const selectLoading = (state) => state.MealRecipesReducer.loading;

export default RootReducer;
