import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import PropTypes from 'prop-types';

import 'react-day-picker/lib/style.css';
import './date-input.css';

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      checkIn: undefined,
      checkOut: undefined,
      adults: 0,
      children: 0,
      placeholder: props.placeholder
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const { selectedDay, dateFormat, placeholder } = this.state;

    return (
      <DayPickerInput
        onDayChange={this.handleDayChange}
        placeholder={placeholder}
      />
    );
  }
}

DateInput.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default DateInput;
