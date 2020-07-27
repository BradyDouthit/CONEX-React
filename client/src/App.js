import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  componentDidMount() {
    axios.get('/api/test')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  };

  render() {
    return (
      <div>
        <h1>This is everything working</h1>
      </div>
    );
  }
}

export default App;
