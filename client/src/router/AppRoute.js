import { Route, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import React, { Component } from 'react';
import Today from '../components/Today/Today';
import Tomorrow from '../components/Tomorrow/Tomorrow';

class AppRoute extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Today}/>
        <Route exact path='/tomorrow' component={Tomorrow}/>
      </Switch>
    )
  }
}

export default withRouter(AppRoute);