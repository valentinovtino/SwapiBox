import React, { Component } from 'react';
import Card from '../Card/Card.js';

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleData: []
    }
  }
  
  createCard = () => {
    const { cleanedCardData } = this.props
    const makeCard = cleanedCardData.map((person)=> {
      return <Card person={person}/>
    })
    return makeCard;
  }

  render() {
    return(
        <div>
          {this.createCard()}
        </div>
      )
  }
}

export default People;