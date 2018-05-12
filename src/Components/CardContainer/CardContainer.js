import React, { Component } from 'react';
import { fetchApi } from '../../api/api.js';
import Card from '../Card/Card';
import { getHomeWorld, getSpecies, getPlanetDetails, getVehicleDetails } from '../../api/helper.js';

class CardContainer extends Component{
  constructor(props){
    super(props) 
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      cleanedCardData: [],  
      initialFetchedObj: [],
    }
  }

initialFetchCall = async () => {
  const { cardType } = this.props

  const categoryData = await fetchApi(cardType)

  this.setState({initialFetchedObj: {...categoryData, cardType: cardType}}, () => {this.checkCardType()})
}

checkCardType = async () => {
  if(this.state.initialFetchedObj.cardType === 'people') {
    const homeWorldObj = await getHomeWorld(this.state.initialFetchedObj)
    const speciesObj = await getSpecies(this.state.initialFetchedObj)
    const cleanedCardData = this.combineObj(homeWorldObj, speciesObj)

    this.setState({people: cleanedCardData}) 
  } 
  else if(this.state.initialFetchedObj.cardType === 'planets') {
    const planetObj = await getPlanetDetails(this.state.initialFetchedObj)

    this.setState({planets: planetObj})
  }
  else if(this.state.initialFetchedObj.cardType === 'vehicles') {
    const vehicleObj = await getVehicleDetails(this.state.initialFetchedObj)
    
    this.setState({vehicles: vehicleObj})
  }
  localStorage.setItem([this.props.cardType], JSON.stringify(this.state[this.props.cardType]))
}

combineObj = (homeWorldObj, speciesObj) => {
  console.log({homeWorldObj})
  console.log({speciesObj})

  let combo;
  const combinedObj = homeWorldObj.reduce((acc, item, i) => {
    combo = Object.assign({}, speciesObj[i])
    acc.push({...item, ...combo})
    return acc
  }, [])
  return combinedObj
}

createCard = (data) => {
  const makeCard = data.map((element)=> {
    return <Card element={element}/>
  })

  return makeCard;
}

getFromLocalStorage = ()=>{
  const retrieveData = localStorage.getItem(this.props.cardType)
  const parsedData = JSON.parse(retrieveData)

  if(!this.state[this.props.cardType]) {
   this.setState({[this.props.cardType]: parsedData}) 
  }

}

checkForLocalStorage = ()=>{
  !localStorage[this.props.cardType] ? this.initialFetchCall() : this.getFromLocalStorage() 
}

  render() {
    this.checkForLocalStorage()
    return (
        <div>
          {this.createCard(this.state[this.props.cardType])}
        </div>
      )
  }
}

export default CardContainer;