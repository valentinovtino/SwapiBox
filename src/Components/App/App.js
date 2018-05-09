import React, { Component } from 'react';
import './App.css';
import api from '../../api/api.js'
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      film: [],
    }
  }

  // async componentDidMount() {
  
  // }

  render() {
    return (
      <div className="App">
        <FilmCrawl/>
        <div className='btn-container'>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </div>
      </div>
    );
  }
}

export default App;
