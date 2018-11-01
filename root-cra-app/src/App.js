import React, { Component } from 'react';
import { loadApp } from './lib/helper';
import './App.css';

class App extends Component {

  componentDidMount() {
    loadApp('childCraApp', '/child', '/child-cra-app/singleSpaEntry.js').then(() => {
      console.log('Child app loaded');
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Single Spa Create React App Root
        </header>
        <div className="spa-container"/>
      </div>
    );
  }
}

export default App;
