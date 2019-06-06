import React, { Component } from 'react';
import BtnBookNow from '../utilities/btn-book-now';
import DateInput from '../utilities/date-input';

import './booking-form.css';

class BookingOperation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonStyle: {
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: '7px'
      },
      formField: {
        checkIn: '',
        checkOut: '',
        adults: 0,
        child: 0
      }
    };
  }

  render() {
    const { buttonStyle } = this.state;
    return (
      <div className="checking-operation spliter-bg" id="checking-operation">
        <div className="title">Book Your Room Now</div>
        <div className="container booking-form">
          {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
          {!selectedDay && <p>Choose a day</p>}
          <DayPickerInput onDayChange={this.handleDayChange} /> */}

          <div className="row">
            <div className="col-sm-3">
              <label className="sm-text-10">Check In:</label>
              <DateInput placeholder={'Check In'} />
            </div>
            <div className="col-sm-3">
              <label className="sm-text-10">Check Out:</label>
              <DateInput placeholder={'Check Out'} />
            </div>
            <div className="col-sm-2">
              <label className="sm-text-10">Adult:</label>
              <input type="number" min="0" placeholder="1" />
            </div>
            <div className="col-sm-2">
              <label className="sm-text-10">Child:</label>
              <input type="number" min="0" placeholder="0" />
            </div>
            <div className="col-sm-2">
              <BtnBookNow buttonText={'Book Now'} buttonStyle={buttonStyle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingOperation;
