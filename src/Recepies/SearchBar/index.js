import React, { Component } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipes } from './action';
import './SearchBar.scss';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      recepies: null
    };
  }
  fetchRecipesByName = (name) => {
    const { onFetch } = this.props;
    onFetch(name);
  }

  changeHandler = (event) => {
    const recepeMatch = event.target.value;
    this.setState({
      recipes: null,
      recipeName: recepeMatch
    });
    
    //Attempt to remove extra white spaces from a recepe match
    if (recepeMatch.replace(/\s/g,' ').trim() !== '') {
      this.fetchRecipesByName(event.target.value);
    }
  }

  render(){
    // Move attributes to it's own line when an element has 3 or
    // more of these specified
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.changeHandler(event) }
          placeholder="search recepies by name" />
      </div>
    );
  }
};

const mapStateToProps = state => {
  // it's better to reassign (by providing keys) what you're pulling data in via mapStateToProps.
  return {
    recipes: state.recipes,
    isLoading: state.isLoading,
    recipeName: state.recipeName
  };
};

export const mapDispatchToProps = dispatch => ({
  onFetch: (recipeName) => dispatch(fetchRecipes(recipeName))
});

// merged into the SearchBar.propTypes
SearchBar.propTypes = {
  onFetch: PropTypes.func,
  fetchRecipesByName: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
