import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
//components
import SystemIndex from './components/SystemIndex/SystemIndex';
import HomePage from './components/HomePage/HomePage'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route 
          exact path="/"
          render={() => <SystemIndex title="System Index" />}
        />
        <Route 
          path="/home"
          render={() =>  <HomePage />}
        />
      </div>
    );
  }
}

export default App;
