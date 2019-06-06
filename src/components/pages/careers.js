import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';
import PageHeader from '../body-content/page-header';

import './contact-us.css';
import contactUsImg from '../../assets/images/contact_us.png';

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
            <div>Join our team and a world of opportunity!</div>

            <div>
              We believe the right environment and the right opportunities allow
              excellent people to deliver outstanding results. Our success
              starts with our people, which is why we are always looking to
              expand our talented team.
            </div>

            <div>
              Send your CV to info@hotpackuae.com and we will get in touch with
              you soon..!!!
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Careers;
