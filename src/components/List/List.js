import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ listItems, isLoading }) => (
    isLoading ?
      <div className="loading" /> :
      <ul className="list-group skytracker-list">
        {listItems.map(item => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
);

List.defaultProps = {
  isLoading: false,
};

List.propTypes = {
  listItems: PropTypes.arrayOf(ListItem).isRequired,
  isLoading: PropTypes.bool,
};

export default List;
