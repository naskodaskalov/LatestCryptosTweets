import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">Latest Cryptos Tweets</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#bitcoin">Bitcoin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ethereum">Ethereum</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ripple">Ripple</a>
            </li>
          </ul>
          </div>
          
        </nav>
      </div>
    )
  }
}