import React from 'react';
// import { fetchApi } from '../../api/api.js';
import Card from '../Card/Card';
import './CardContainer.css'
// import { getHomeWorld, getSpecies, getPlanetDetails, getVehicleDetails } from '../../api/helper.js';
import PropTypes from 'prop-types';

export const CardContainer = ({ allState, handleFavorite }) => {
  const cardClicked = allState.cardType;
  const favCards = allState.favorites;
  const createCard = (data) => {
    const makeCard = data.map((element) => {

      return <Card
        handleFavorite={handleFavorite}
        element={element} />;
    });

    return makeCard;
  };

  return (
    allState.cardType ?
      <div className='card-container'>
        { createCard(allState[cardClicked]) }
      </div>
      :
      <div>
        {createCard(allState[favCards])}
      </div>
  );
};

CardContainer.propTypes = {
  cardType: PropTypes.string,
  film: PropTypes.array,
  people: PropTypes.array,
  vehicles: PropTypes.array,
  planets: PropTypes.array,
  cleanedCardData: PropTypes.array,
  ititialFetchedObj: PropTypes.array
};