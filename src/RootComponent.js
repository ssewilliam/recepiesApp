import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBar } from './Recepies/SearchBar/SearchBar';
import { SearchResults } from './Recepies/SearchResults/SearchResults';
import { simpleAction } from './actions/simpleAction';

class RootComponent extends Component {
  render() {
    return (
      <div className="App">
        <h2>Recepies App</h2>
        <SearchBar />
        <hr/>
        <SearchResults/>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
  simpleAction = (event) => {
    this.props.simpleAction();
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

RootComponent.propTypes = {
  simpleAction: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
