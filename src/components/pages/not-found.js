import React, { Component } from 'react';

import Header from '../header/';
import Footer from '../footer/';


class Home extends Component {
  render() {
    return (
      <div className="super_container">
        <Header />
        <div className='not-found'>Not Found</div>
        <Footer />
      </div> 
    )
  }
}

export default Home;
