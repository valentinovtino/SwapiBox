import React, { Component }from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import star from '../../Images/favorites.svg'

class Card extends Component {

  card = () => {
    const { dynamic1, dynamic2, dynamic3, dynamic4, dynamic5} = this.props.element;

    return (
      <div className='card-container'>
        <div className='card'>
          <button className='favbtn body-font' onClick = { () => this.props.handleFavorite({dynamic1, dynamic2, dynamic3, dynamic4, dynamic5}) }><img src={star} width="100" height="50" /> </button>
          <h2 className='font card-title'>{ dynamic1 }</h2>
          <h3 className='font body-font'>{ dynamic2 }</h3>
          <h3 className='font body-font'>{ dynamic3 }</h3>
          <h3 className='font body-font'>{ dynamic4}</h3>
          <h3 className='font body-font'>{ dynamic5}</h3>

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

Card.propTypes = {
  element: PropTypes.object,
  dynamic1: PropTypes.string,
  dynamic2: PropTypes.string,
  dynamic3: PropTypes.string,
  dynamic4: PropTypes.string,
  dynamic5: PropTypes.string
};

export default Card;

