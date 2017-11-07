import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import Router from 'react-router';
import 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
