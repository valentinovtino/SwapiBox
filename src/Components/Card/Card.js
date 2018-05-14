import React, { Component }from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

    

    card = () => {
      const { dynamic1, dynamic2, dynamic3, dynamic4, dynamic5} = this.props.element;
        
      return(
        <div className='card-container'>
          <div className='card'> 
            <h2 className='font'>{ dynamic1 }</h2>
            <h3 className='font'>{ dynamic2 }</h3>
            <h3 className='font'>{ dynamic3 }</h3>
            <h3 className='font'>{ dynamic4}</h3>
            <h3 className='font'>{ dynamic5}</h3>
            <button onClick= {() => this.props.handleFavClick({ dynamic1, dynamic2, dynamic3, dynamic4, dynamic5})} className='fav-btn'>FavMe</button>
          </div>
        </div>

      );
    }

    render() {
      return (
        <div>
          {this.card()}
        </div>
      );
    }
}

export default Card;