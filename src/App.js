import React, { Component } from 'react';
import Routes from './config/Routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Routes />
        <footer>
          <div className="copyright">
            Coded and Published by <a href="https://twitter.com/naskodaskalov">Nasko Daskalov</a> | <a href="http://developine.eu">developine.eu</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
