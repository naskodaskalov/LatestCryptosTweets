import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

import NavBar from './NavBar';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <div className="tweets row">
          <div id="bitcoin" className="col-md">
            <Timeline
            dataSource={{sourceType:"profile", screenName: 'bitcoin'}}
            options={{tweetLimit:"5"}}
            />
          </div>

          <div id="ethereum" className="col-md">
            <Timeline
            dataSource={{sourceType:"profile", screenName:"ethereum"}}
            options={{tweetLimit:"5"}}
            />
          </div>

          <div id="ripple" className="col-md">
            <Timeline 
            dataSource={{sourceType:"profile", screenName:"ripple"}}
            options={{tweetLimit:"5"}}
            />
          </div>
        </div>
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
