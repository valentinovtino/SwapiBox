import React from 'react';
// import { fetchApi } from '../../api/api.js';
import Card from '../Card/Card';
import './CardContainer.css'
// import { getHomeWorld, getSpecies, getPlanetDetails, getVehicleDetails } from '../../api/helper.js';

export const CardContainer = ({ allState }) => {
  const cardClicked = allState.cardType;

  const createCard = (data) => {
    const makeCard = data.map((element) => {

      return <Card element={element} />;
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
        <p>hi</p>
      </div>
  );
};
