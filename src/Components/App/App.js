import React, { Component } from 'react';
import './App.css';
import api from '../../api/api.js';
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';
import { CardContainer } from '../CardContainer/CardContainer.js';
import { getHomeWorld, getSpecies, getPlanetDetails, getVehicleDetails } from '../../api/helper.js';
import { fetchApi } from '../../api/api.js';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      cardType: '',
      people: [],
      vehicles: [],
      planets: [],
      cleanedCardData: [],
      initialFetchedObj: [],
      favorites: []
    };
  }

  handleFavorite = (element) => {
    const found = this.state.favorites.find(card => {
      return element.dynamic1 === card.dynamic1;
    });

    if (!found) {
      this.setState({ favorites: [...this.state.favorites, element] });

    } else {
      const removeFav = this.state.favorites.filter(card => {
        return element.dynamic1 !== card.dynamic1;
      });
      this.setState({ favorites: removeFav });
    }
  }

  handleClick = (event) => {
    this.setState({ cardType: event.target.value }, () => { this.initialFetchCall(); });
  }

  initialFetchCall = async () => {
    if (this.state.cardType !== 'favorites') {
      const categoryData = await fetchApi(this.state.cardType);
      this.checkCardType(categoryData);
    }

  }

  getpeopleData = async (categoryData) => {
    const homeWorldObj = await getHomeWorld(categoryData);
    const speciesObj = await getSpecies(categoryData);
    const cleanedCardData = this.combineObj(homeWorldObj, speciesObj);

    this.setState({ people: cleanedCardData });
  }

  getVehicleData = async (categoryData) => {
    const vehicleObj = await getVehicleDetails(categoryData);

    this.setState({ vehicles: vehicleObj });
  }

  getPlanetData = async (categoryData) => {
    const planetObj = await getPlanetDetails(categoryData);

    this.setState({ planets: planetObj });
  }

  checkCardType = async (categoryData) => {
    if (this.state.cardType === 'people') {
      this.getpeopleData(categoryData);
    }
    else if (this.state.cardType === 'planets') {
      this.getPlanetData(categoryData);
    }
    else if (this.state.cardType === 'vehicles') {
      this.getVehicleData(categoryData);
    }

    localStorage.setItem([this.props.cardType], JSON.stringify(this.state[this.props.cardType]));
  }

  combineObj = (homeWorldObj, speciesObj) => {
    let combo;
    const combinedObj = homeWorldObj.reduce((acc, item, i) => {
      combo = Object.assign({}, speciesObj[i]);
      acc.push({ ...item, ...combo });
      return acc;
    }, []);
    return combinedObj;
  }

  checkForLocalStorage = () => {
    !localStorage[this.props.cardType] ? this.initialFetchCall() : this.getFromLocalStorage();
  }

  getFromLocalStorage = () => {
    const retrieveData = localStorage.getItem(this.props.cardType);
    const parsedData = JSON.parse(retrieveData);

    if (!this.state[this.props.cardType]) {
      this.setState({ [this.props.cardType]: parsedData });
    }

  }

  render() {
    return (
      <div className="App">
          <h3 className='title'> SWapi Box </h3>
        <div className='btn-container'>
          <button onClick={this.handleClick} value='people' className='button'>People</button>
          <button onClick={this.handleClick} value='planets' className='button'>Planets</button>
          <button onClick={this.handleClick} value='vehicles' className='button'>Vehicle</button>
          <button onClick={this.handleClick} value='favorites'
            className='button'>Favorites</button>
          
        </div>

        <div>
          {this.state.cardType &&
            <CardContainer
            allState={this.state}
            handleFavorite={this.handleFavorite}
            />}
        </div>
            <FilmCrawl />

      </div>
    );
  }
}

App.propTypes = {
  cardTypes: PropTypes.string
};

export default App;


