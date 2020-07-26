import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  axios.get('/api/test')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })

  return (
    <div>
      <h1>This is everything working</h1>
    </div>
  );
}

export default App;
