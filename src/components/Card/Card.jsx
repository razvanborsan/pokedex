import React from 'react';

import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';

import '../../shared/pokemonTypes.css';
import './Card.css';

function Card({ pokemon }) {
  return (
    <div className={`cardContainer ${pokemon.types[0].type.name}`}>
      <CardHeader pokemon={pokemon} />
      <CardBody pokemon={pokemon} />
    </div>
  );
}

export default Card;
