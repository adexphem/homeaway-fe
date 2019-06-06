import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './components/pages/home';
import About from './components/pages/about';
import ContactUs from './components/pages/contact-us';
import Careers from './components/pages/careers';
import NotFound from './components/pages/not-found';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/general.css';

// import homeImage1a from './assets/images/home.jpg'
import homeImage1 from './assets/images/side-view-a.jpg';
import homeImage2 from './assets/images/front-view.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomised: Math.floor(Math.random() * 2) + 1
    };
  }

  render() {
    const divStyle = {
      position: 'absolute',
      height: '100vh',
      width: '100%',
      maxWidth: 'none',
      zIndex: '-1',
      background: 'transparent'
    };

    const { randomised } = this.state;
    const imageName = randomised === 1 ? homeImage1 : homeImage2;

    return (
      <Router>
        <div className="App">
          <div>
            {randomised && (
              <img src={imageName} style={divStyle} alt="home page" />
            )}
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={ContactUs} />
            <Route path="/careers" component={Careers} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
