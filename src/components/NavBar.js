import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to='/' className="navbar-brand">
            <h1>Latest Cryptos Tweets</h1>
          </Link>
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
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for other twitter"
              aria-label="Search"
              name="twitterName"
              value={this.props.value}
              onChange={this.props.onChange} />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={this.props.onClick}>Search</button>
          </form>
          </div>
        </nav>
      </div>
    )
  }
}