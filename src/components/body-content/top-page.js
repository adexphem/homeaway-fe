import React, { Component } from 'react';

import BtnBookNow from '../utilities/btn-book-now';

import './top-page.css';

class TopPage extends Component {
  componentDidMount() {}

  moveToBooking = () => {
    const scrollTo = document.querySelector('#checking-operation');
    window.scroll(0, scrollTo);
  };

  render() {
    return (
      <div className="container">
        <div className="caption">
          <h1 className="caption">Book Your Stay</h1>
          <div className="caption_details">
            Our apartments are well furnished with state of the art equipments
            to suit your taste.
          </div>
          <div className="caption_cta">
            <BtnBookNow
              buttonText={'Book Your Room Now'}
              buttonLink={this.moveToBooking}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TopPage;
