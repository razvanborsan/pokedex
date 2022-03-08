import React from 'react';
import { Link } from 'react-router-dom';

import { capitalize } from 'shared/helpers';

import 'shared/pokemonTypes.css';
import './Card.css';

function Card({ pokemon }) {
  return (
    <div className={`card-container ${pokemon.types[0].type.name}`}>
      <Link to={`/pokemon/${pokemon.id}`} id={pokemon.id}>
        <div className="card-content">
          <div className="card-header">
            <h3>{capitalize(pokemon.name)}</h3>
            <h4>
              #
              {Array(3 - `${pokemon.id}`.length).fill(0)}
              {pokemon.id}
            </h4>
          </div>

          <div className="card-body">
            <div className="pokemon-types-container">
              {pokemon.types.map((entry) => (
                <div
                  className={`pokemon-type ${entry.type.name}`}
                  key={entry.slot}
                >
                  {capitalize(entry.type.name)}
                </div>
              ))}
            </div>
            <div className="pokemon-photo">
              <img src={pokemon.sprites.other.official_artwork.front_default} alt="Pokemon" />
            </div>
          </div>
        </div>
      </Link>

    </div>
  );
}

export default Card;
