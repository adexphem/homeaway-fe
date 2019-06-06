import React, { Component } from 'react';
import BtnBookNow from '../utilities/btn-book-now';
import DateInput from '../utilities/date-input';

import './booking-form.css';

class BookingOperation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="checking-operation">
        <div className="container">
          {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
          {!selectedDay && <p>Choose a day</p>}
          <DayPickerInput onDayChange={this.handleDayChange} /> */}

          <div class="row">
            <div class="col-2">
              <DateInput />
            </div>
            <div class="col-2">
              <DateInput />
            </div>
            <div class="col-2">Adults</div>
            <div class="col-2">Children</div>
            <div class="col-4">
              <BtnBookNow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingOperation;
