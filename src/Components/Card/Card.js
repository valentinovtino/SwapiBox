import React, { Component }from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {

  card = () => {
    const { dynamic1, dynamic2, dynamic3, dynamic4, dynamic5} = this.props.element;

    return (
      <div className='card-container'>
        <div className='card'>
          <h2 className='font'>{ dynamic1 }</h2>
          <h3 className='font'>{ dynamic2 }</h3>
          <h3 className='font'>{ dynamic3 }</h3>
          <h3 className='font'>{ dynamic4}</h3>
          <h3 className='font'>{ dynamic5}</h3>
          <button className='favbtn' onClick = { () => this.props.handleFavorite({dynamic1, dynamic2, dynamic3, dynamic4, dynamic5}) }>Fave Me!</button>

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

