import React from 'react';
// import { fetchApi } from '../../api/api.js';
import Card from '../Card/Card';
// import { getHomeWorld, getSpecies, getPlanetDetails, getVehicleDetails } from '../../api/helper.js';

export const CardContainer = ({ allState }) => {
const someshit = allState.cardType

  const createCard = (data) => {
    const makeCard = data.map((element) => {

      return <Card element={element} />
    })

    return makeCard;
  }

  return (
    allState.cardType ?
    createCard(allState[someshit]) :
    <div>
      <p>hi</p>
    </div>
  )
}
