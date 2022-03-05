import React from 'react';

import { capitalize } from '../../../shared/helpers';

import './CardBody.css';

function CardBody({ pokemon }) {
  return (
    <div className="cardBody">
      <div className="pokemonTypesContainer">
        {pokemon.types.map((entry) => (
          <div
            className="pokemonType"
            style={{ backgroundColor: pokemon.color }}
            key={entry.slot}
          >
            {capitalize(entry.type.name)}
          </div>
        ))}
      </div>
      <div className="pokemonPhoto">
        <img src={pokemon.sprites.other.official_artwork.front_default} alt="Pokemon" />
      </div>
    </div>
  );
}

export default CardBody;
