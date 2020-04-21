import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
  }

  get = () => {
    axios.get('/api').then(data => {
      console.log(data)
      return (
        <div>DATA</div>
      )
    })
  }
  
  render() {
    return (
      <div className="App">
        Test
        {this.get()}
      </div>
    );
  }
}

export default App;
