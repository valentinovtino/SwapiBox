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
      cardType: ''
    }
  }

  handleClick = (event) => {

    this.setState({cardType: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <FilmCrawl/>
        <button onClick={this.handleClick} value='people' className='button'>People</button>
        <button onClick={this.handleClick} value='planets' className='button'>Planets</button>
        <button onClick={this.handleClick} value='vehicles' className='button'>Vehicle</button>
        <button>Favorites</button>

        <div>
        {this.state.cardType && <CardContainer cardType={this.state.cardType}/>}
        </div>

      </div>
    );
  }
}

export default App;
