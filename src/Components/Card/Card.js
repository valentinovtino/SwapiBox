import React, { Component }from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorite: false,
        }
    }
    card = (props) => {
        const { CharacterName, HomeWorld, Population, Species} = this.props.person
        
        return(
            <div className='card'> 
            <h2 className='font'>{ CharacterName }</h2>
            <h3 className='font'>{ HomeWorld }</h3>
            <h3 className='font'>{ Population }</h3>
            <h3 className='font'>{ Species }</h3>
        </div>

)
}

render() {
    return (
        <div>
            {this.card()}
        </div>
    )
}
}

export default Card;