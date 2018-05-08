import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    state = {
      people: [],
      planets: [],
      vehicles: [],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">SWapiBox</h1>
        </header>
       
      </div>
    );
  }
}

export default App;
