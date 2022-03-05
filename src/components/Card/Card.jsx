import React from 'react';

import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';

import './Card.css';

function Card({ pokemon }) {
  return (
    <div className="cardContainer" style={{ backgroundColor: pokemon.color }}>
      <CardHeader pokemon={pokemon} />
      <CardBody pokemon={pokemon} />
    </div>
  );
}

export default Card;
