import React, { Component } from 'react';
import './App.css';

//import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';

import MainPage from './components/MainPage';
import ResumePage from './components/ResumePage';

class App extends Component {
  render() {
    return (
      <div>
        <MainPage/>
      </div>
    );
  }
}

export default App;
