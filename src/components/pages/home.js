import React, { Component } from 'react';

import Header from '../header/';
import Footer from '../footer/';
import MainBody from '../body-content/';
import ItemsGrid from '../body-content/items-grid';
import BookingForm from '../body-content/booking-form';

// import homeImage from '../../assets/images/home.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname === '/') this.setState({ isActive: true });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="super_container">
        <Header isActive={isActive} />
        <MainBody />
        <div className="spread-inline">
          <div className="container">
            <ItemsGrid />
          </div>
        </div>
        <BookingForm />
        <Footer />
      </div>
    );
  }
}

export default Home;
