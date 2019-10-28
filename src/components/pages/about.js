import React, { Component } from 'react';

import Header from '../header/';
import Footer from '../footer/';
import PageHeader from '../body-content/page-header';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname === '/about') this.setState({ isActive: true });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="super_container">
        <Header isActive={isActive} />
        <PageHeader title="About Us" />
        <div className="spread-inline">
          <div className="container">
            <div className="contact-wrapper">
              <div className="_description">
                <div className="cta-middle">
                  HomeAway Apartments is a newly opened, well furnished
                  short-let service apartment that is located in the most serene
                  and secured environment in the heart of Akure (Ijapo Estate).
                  Our apartments are well furnished with state of the art
                  equipments to suit your taste, our service is excellent
                  24hours internet and power supply, availability of car hire
                  services, centralised location 7 minutes drive to Akure
                  shopping mall, 10mins drive to the airport,smooth road network
                  ,wide compound suitable for parties and gatherings.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
