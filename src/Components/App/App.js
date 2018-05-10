import React, { Component } from 'react';
import './App.css';
import api from '../../api/api.js'
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';
import CardContainer from '../CardContainer/CardContainer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      cardType: 'people'
    }
  }

  render() {
    return (
      <div className="App">
        <FilmCrawl/>
        <button>People</button>
        <CardContainer cardType={this.state.cardType}/>
      </div>
    );
  }
}

export default App;
