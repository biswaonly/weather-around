import React, { Component } from 'react';
import './App.css';
import LeftPanel from './components/LeftPannel/LeftPanel';
import AppRoute from './router/AppRoute';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <LeftPanel />
          <AppRoute />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
