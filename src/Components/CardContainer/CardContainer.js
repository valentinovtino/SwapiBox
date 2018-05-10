import React, { Component } from 'react';
import { fetchApi } from '../../api/api.js';
import People from '../People/People.js';
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
  const mainObj = homeWorldObj.reduce((acc, item, i) => {
    combo = Object.assign({}, speciesObj[i])
    acc.push({...item, ...combo})
    return acc
  }, [])
  return mainObj
}

// getHomeWorld = (categoryObj) => {
//   const categoryArray = categoryObj.results;

//   const unresolvedPromises = categoryArray.map( async (peopleKey) => {
//     const response = await fetch(peopleKey.homeworld)
//     const data = await response.json()

//     return { CharacterName: peopleKey.name, HomeWorld: data.name, Population: data.population }
//   })

//   return Promise.all(unresolvedPromises)
// }

// getSpecies = (categoryData) => {
//   const categoryArray = categoryData.results
//   const unresolvedPromises = categoryArray.map( async (peopleKey) => {
//     const response = await fetch(peopleKey.species)
//     const data = await response.json()

//     return {species: data.name}
//   })
//   return Promise.all(unresolvedPromises)
// }

  render() {
    // console.log(this.state.categoryData)
    return (
        <div>
          <People cleanedCardData={this.state.cleanedCardData}/>

        </div>
      )
  }
}

export default CardContainer;