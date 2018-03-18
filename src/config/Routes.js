import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Search from '../components/Search';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/search/:name' component={Search} />
  </Switch>
)

export default Routes
