import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';
import NavBar from './NavBar';


export default class Search extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      searchedCompany: this.props.match.params.name,
      search: {
        twitterName: ''
      }
    }
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
    return (      
      <div>
        <NavBar
          value={this.state.search.twitterName}
          onClick={this.handleSearch}
          onChange={this.handleInputChange} />
        <div className="tweets row">
          <div id={this.state.searchedCompany} className="col-md">
            <Timeline
              dataSource={{sourceType:"profile", screenName: `${this.state.searchedCompany}`}}
              options={{tweetLimit:"10"}} />
          </div>
        </div>
      </div>
    );
  }
}