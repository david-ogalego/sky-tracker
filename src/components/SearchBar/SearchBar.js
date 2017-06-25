import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import DatePicker from '../DatePicker/DatePicker';
import AutoComplete from '../AutoComplete/AutoComplete';
import { fetchPlaces } from '../../data/service';

class SearchBar extends Component {
  state = {
    fromWhere: {},
    toWhere: {},
    dayFrom: '',
    dayTo: '',
    dayReturnFrom: '',
    dayReturnTo: '',
  }
  componentWillUpdate(nextProps, nextState) {
    if (shallowCompare(this, nextProps, nextState)) {
      this.checkSearchResults(nextState);
    }
  }
  onChange = value => fetchPlaces(value)
  onSelectFrom = (fromWhere) => {
    this.setState({
      fromWhere,
    });
  }
  onSelectTo = (toWhere) => {
    this.setState({
      toWhere,
    });
  }
  dayChangeReturnTo = (dayReturnFrom, dayReturnTo) => {
    this.setState({
      dayReturnFrom,
      dayReturnTo,
    });
  }
  dayChangeFrom = (dayFrom, dayTo) => {
    this.setState({
      dayFrom,
      dayTo,
    });
  }
  checkSearchResults(newState) {
    if (newState.fromWhere.id && newState.toWhere.id &&
        newState.dayFrom && newState.dayTo &&
        newState.dayReturnFrom && newState.dayReturnTo) {
      this.props.searchResults(
          newState.fromWhere.id,
          newState.toWhere.id,
          newState.dayFrom,
          newState.dayTo,
          newState.dayReturnFrom,
          newState.dayReturnTo,
        );
    } else {
      this.props.clearResults();
    }
  }
  render() {
    return (
      <div className="form-horizontal search-bar">
        <AutoComplete className="form-group " id="FROM" placeholder={'Where are you traveling from?'} onChange={this.onChange} onSelect={this.onSelectFrom} />
        <AutoComplete className="form-group " id="TO" placeholder={'Where are you travelling to?'} onChange={this.onChange} onSelect={this.onSelectTo} />
        <DatePicker className="form-group " literal={'From'} placeholder={'When do you want to take off?'} dayChange={this.dayChangeFrom} />
        <DatePicker className="form-group " literal={'To'} placeholder={'When do you want to go back?'} dayChange={this.dayChangeReturnTo} />
      </div>
    );
  }
}

SearchBar.defaultProps = {
  searchResults: () => { },
  clearResults: () => { },
};

SearchBar.propTypes = {
  searchResults: PropTypes.func,
  clearResults: PropTypes.func,
};

export default SearchBar;
