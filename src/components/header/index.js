import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import BtnBookNow from '../utilities/contact-sm-info';

import './header-index.css';
import Logo from '../../assets/images/logo.png';

const Index = ({ isActive }) => {
  return (
    <div className="header">
      <div className="header_content">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="home away" />
          </Link>
        </div>
        <div className="container">
          {/* nav_bar */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink
              to="/"
              className="navbar-brand d-sm-block d-md-none mobile-title"
              activeClassName="active"
            >
              HomeAwayApts
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    ROOMS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/careers">
                    CAREERS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    CONTACT US
                  </Link>
                </li>
              </ul>
              <div className="my-2 my-lg-0">
                <div>twiter | facebook</div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Index;
