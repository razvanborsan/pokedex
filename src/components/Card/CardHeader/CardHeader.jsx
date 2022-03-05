import React from 'react';
import { capitalize } from '../../../shared/helpers';

import './CardHeader.css';

function CardHeader({ pokemon }) {
  return (
    <div className="cardHeader">
      <h3>{capitalize(pokemon.name)}</h3>
      <h4>
        #
        {Array(3 - `${pokemon.id}`.length).fill(0)}
        {pokemon.id}
      </h4>
    </div>
  );
}

export default CardHeader;
