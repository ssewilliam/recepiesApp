import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRecipe from './Recepies/SearchResults/selectors';
import SearchBar from './Recepies/SearchBar/SearchBar';
import { SearchResult } from './Recepies/SearchResults/SearchResult';

class RootComponent extends Component {
  state = {
    recipeName: ''
  }

  fetchRecipeByName = (name) => {
    this.setState({
      recipeName: name
    });
  }

  render() {
    const { recipeName } = this.state;
    const { recipes } = this.props;
    return (
      <div className="App">
        <h2>Recepies App</h2>
        <SearchBar fetchRecipeByName={this.fetchRecipeByName} />
        <hr/>
        <SearchResult recipes={recipes} recipeName={recipeName} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    recipes: state.MealRecipesReducer.recipes
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onFetch: (recipeName) => dispatch(fetchRecipe(recipeName))
  };
};

RootComponent.propTypes = {
  onFetch: PropTypes.func,
  recipes: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
