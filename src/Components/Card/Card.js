import React from 'react';

const Card = ({ person }) => {
    
    const CharacterName = person.CharacterName;
    const HomeWorld = person.HomeWorld;
    const Population = person.Population;
    const Species = person.species;

    return(
        <div>
            <h2>HOWDY { CharacterName }</h2>
        </div>

    )
}

export default Card;