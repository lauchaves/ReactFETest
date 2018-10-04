import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../containers/header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    );
  }
}
