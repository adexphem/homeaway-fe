import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';
import PageHeader from '../body-content/page-header';

import './contact-us.css';
import contactUsImg from '../../assets/images/contact_us.png';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      contactMessage: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  }

  render() {
    const { isActive } = this.state;
    const { name, email, phone, message } = this.state.contactMessage;
    return (
      <div className="super_container">
        <Header isActive={isActive} />
        <PageHeader title="Contact Us" />
        <div className="spread-inline">
          <div className="container">
            <div className="contact-wrapper">
              <div className="_form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="txtName"
                        className="form-control"
                        placeholder="Your Name *"
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="txtEmail"
                        className="form-control"
                        placeholder="Your Email *"
                        value={email}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="txtPhone"
                        className="form-control"
                        placeholder="Your Phone Number *"
                        value={phone}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        name="txtMsg"
                        className="form-control message"
                        placeholder="Your Message *"
                        value={message}
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="submit"
                      name="btnSubmit"
                      className="btn-uni"
                      value="Send Message"
                    />
                  </div>
                </div>
              </div>
              <div className="_info">
                <div>
                  <div className="sub">Phone Support</div>
                  <div className="main">0703 424 2943, 0703 971 6767</div>
                </div>
                <div className="work-duration">
                  <div className="sub">Reception open</div>
                  <div className="main">24 hours a day</div>
                </div>
                <div className="brand-image">
                  <img src={contactUsImg} />
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

export default Contacts;
