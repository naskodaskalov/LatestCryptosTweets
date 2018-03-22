import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';
import NavBar from './NavBar';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        twitterName: ''
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange (event)  {
    const target = event.target;
    let field = target.name;
    let value = target.value;
    let search = this.state.search;
    search[field] = value;

    this.setState({ search });
  }

  handleSearch (event) {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.search.twitterName}`)
  }
  render() {
    let defaultCompanies = ['bitcoin', 'ethereum', 'ripple'];
    let currentCompany = defaultCompanies.map((c, index) => (
      <div id={c} className="col-md" key={index}>
        <Timeline
        dataSource={{sourceType:"profile", screenName: `${c}`}}
        options={{tweetLimit:"10"}}
        />
      </div>
    ))

    return (
      <div>
        <NavBar
          value={this.state.search.twitterName}
          onClick={this.handleSearch}
          onChange={this.handleInputChange} />
        <div className="tweets row">
          {currentCompany}
        </div>
      </div>
    );
  }
}