import React from 'react';
import './Card.css';

const Card = ({ person, className }) => {
    const CharacterName = person.CharacterName;
    const HomeWorld = person.HomeWorld;
    const Population = person.Population;
    const Species = person.species;

    return(
        <div className='card'> 
            <h2 className='font'>{ CharacterName }</h2>
            <h3 className='font'>{ HomeWorld }</h3>
            <h3 className='font'>{ Population }</h3>
            <h3 className='font'>{ Species }</h3>
        </div>

    )
}

export default Card;