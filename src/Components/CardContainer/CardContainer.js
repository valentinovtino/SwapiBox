import React, { Component } from 'react';
import { fetchApi } from '../../api/api.js';
import Card from '../Card/Card';
import { getHomeWorld, getSpecies } from '../../api/helper.js';

class CardContainer extends Component{
  constructor(props){
    super(props) 
    this.state = {
     cleanedCardData: [] 
    }
  }

async componentDidMount() {
  const { cardType } = this.props
  const categoryData = await fetchApi(cardType)
  const homeWorldObj = await getHomeWorld(categoryData)
  const speciesObj = await getSpecies(categoryData)
  const cleanedCardData = this.combineObj(homeWorldObj, speciesObj)

  this.setState({cleanedCardData}) //set resolved promise to state
}

combineObj = (homeWorldObj, speciesObj) => {
  let combo;
  const combinedObj = homeWorldObj.reduce((acc, item, i) => {
    combo = Object.assign({}, speciesObj[i])
    acc.push({...item, ...combo})
    return acc
  }, [])
  return combinedObj
}

createCard = (data) => {
  const makeCard = data.map((person)=> {
    return <Card person={person}/>
  })
  return makeCard;
}
  render() {
    return (
        <div>
          {this.createCard(this.state.cleanedCardData)}
        </div>
      )
  }
}

export default CardContainer;