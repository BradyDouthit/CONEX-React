import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SystemIndex from './components/SystemIndex/SystemIndex';


class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Route 
          exact path="/"
          render={() => <SystemIndex title="System Index" />}
        />
      </div>
    );
  }
}

export default App;
