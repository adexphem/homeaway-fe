import React from 'react';

import Logo from '../../assets/images/logo.png';

import './footer-index.css';

const index = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_brand">
          <img src={Logo} alt="footer brand" />
        </div>
        <div className="footer_content row">
          <div className="col-sm-4">
            <label>Phone:</label>
            <div className="_wrap">
              +234 703 424 2943 <br />
              +234 703 971 6767
            </div>
          </div>
          <div className="col-sm-4">
            <label>Address:</label>
            <div className="_wrap">
              Plot 10, Block 1XD, <br />
              Opp. RCCG Glory Tabernacle, <br /> Ijapo Estate, Akure Ondo State.
            </div>
          </div>
          <div className="col-sm-4">
            <label>Mail:</label>
            <div className="_wrap">
              enquiry@homeawayng.com <br />
              bookings@homeawayng.com
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="_wrap">Copyright {2019} All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default index;
