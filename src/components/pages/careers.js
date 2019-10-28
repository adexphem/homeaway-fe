import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';
import PageHeader from '../body-content/page-header';

import './career.css';
import careersImg from '../../assets/images/career.png';

class Careers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="super_container">
        <Header isActive={isActive} />
        <PageHeader title="Careers" />
        <div className="spread-inline">
          <div className="container">
            <div className="contact-wrapper">
              <div className="_description">
                <div className="cta-top">
                  Join our team and a world of opportunity!
                </div>

                <div className="cta-middle">
                  We believe the right environment and the right opportunities
                  allow excellent people to deliver outstanding results. Our
                  success starts with our people, which is why we are always
                  looking to expand our talented team.
                </div>

                <div className="cta-info">
                  Send your CV to info@homeawayaptsakure.com and we will get in
                  touch with you soon..!!!
                </div>
              </div>
              <div className="_info">
                <div className="brand-image">
                  <img src={careersImg} alt="careers" />
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

export default Careers;
