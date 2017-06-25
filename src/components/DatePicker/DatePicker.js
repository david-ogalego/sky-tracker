import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class DatePicker extends Component {
  state = {
    daySelected: '',
  }
  handleDayChange = (daySelectedInput) => {
    let dayFormated = '';
    let dayFormatedAdded = '';
    if (daySelectedInput) {
      dayFormated = daySelectedInput.format('DD/MM/YYYY');
      dayFormatedAdded = daySelectedInput.add('days', 1).format('DD/MM/YYYY');
    }
    this.setState({
      daySelected: dayFormated,
    });
    if (this.props.dayChange) {
      this.props.dayChange(dayFormated, dayFormatedAdded);
    }
  };
  render() {
    return (
      <div className={this.props.className}>
        <DayPickerInput
          format="DD/MM/YYYY"
          value={this.state.daySelected}
          placeholder={this.props.placeholder}
          onDayChange={this.handleDayChange}
          className="form-control input-skytracker"
        />
      </div>
    );
  }
}

DatePicker.defaultProps = {
  className: '',
  dayChange: () => {},
  placeholder: '',
};

DatePicker.propTypes = {
  className: PropTypes.string,
  dayChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default DatePicker;
