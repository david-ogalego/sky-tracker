import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ from, to, date, time, price }) => (
  <li className="list-group-item">
    <h4 className="list-group-item-heading">{from} <span className="glyphicon glyphicon-arrow-right" /> {to}</h4>
    <span className="label label-info">{date}</span>
    <span className="label label-primary skytracker-time">{time}</span>
    <span className="badge">{price} €</span>
  </li>
);

ListItem.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ListItem;
