import axios from 'axios';
import {
  fetchRecipeStart,
  fetchRecipeSuccess,
  fetchRecipeFail
} from './action';


const fetchRecipe = (name) => {
  return dispatch => {
    dispatch(fetchRecipeStart());
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => {
        dispatch(fetchRecipeSuccess(response.data.meals));
      })
      .catch(error => {
        dispatch(fetchRecipeFail(error));
        console.log(error);
      });
  };
};

export default fetchRecipe;