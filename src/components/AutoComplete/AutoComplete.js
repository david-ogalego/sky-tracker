import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';

class AutocompleteSky extends Component {
  state = {
    value: '',
    items: [],
  }
  onSelect = (value, item) => {
    this.setState({
      value,
    });
    this.selectItem(item);
  }
  onChange = (event, value) => {
    this.setState({
      value,
    });
    if (this.props.onChange && value.length > 1) {
      this.props.onChange(value).then((items) => {
        this.setState({
          items,
        });
      });
    }
    if (value === '') {
      this.selectItem({});
    }
  }
  selectItem = (item) => {
    if (this.props.onSelect) {
      this.props.onSelect(item);
    }
  }
  render() {
    const menuStyle = {
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%',
      zIndex: 2,
      display: 'block',
    };
    return (
      <div className={this.props.className}>
        <Autocomplete
          id={`states-autocomplete'${this.props.id}`}
          value={this.state.value}
          inputProps={{
            id: `states-autocomplete'${this.props.id}`,
            placeholder: this.props.placeholder,
            className: 'form-control input-skytracker',
          }}
          wrapperProps={{
            className: 'dropdown',
          }}
          items={this.state.items}
          getItemValue={item => item.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
          renderMenu={(items, value, style) => (
            <ul className="dropdown-menu" style={{ ...style, ...menuStyle }} >{items}</ul>
          )}
          renderItem={(item, isHighlighted) => (
            <li key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              <a>{item.value}</a>
            </li>
          )}
          wrapperStyle={{ display: 'block' }}
        />
      </div>
    );
  }
}

AutocompleteSky.defaultProps = {
  className: '',
  id: '',
  onSelect: () => { },
  onChange: () => {},
  placeholder: '',
};

AutocompleteSky.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default AutocompleteSky;
