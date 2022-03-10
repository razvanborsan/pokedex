import React from 'react';
import { Link } from 'react-router-dom';

import { capitalize } from 'shared/helpers';

import 'shared/pokemonTypes.css';
import BaseCard from '../BaseCard/BaseCard';
import TypeCard from '../TypeCard/TypeCard';
import './PreviewCard.css';

function PreviewCard({ pokemon }) {
  return (
    <BaseCard customClasses={`preview-card ${pokemon.types[0].type.name}`}>
      <Link to={`/pokemon/${pokemon.id}`} id={pokemon.id}>
        <div className="card-content">
          <div className="card-header">
            <h3>{capitalize(pokemon.name)}</h3>
            <h4>
              #
              {pokemon.id.toString().padStart(3, '0')}
            </h4>
          </div>

          <div className="card-body">
            <div className="pokemon-types-wrapper">
              {pokemon.types.map((entry) => (
                <TypeCard type={entry.type.name} />
              ))}
            </div>
            <div className="pokemon-photo">
              <img src={pokemon.sprites.other.official_artwork.front_default} alt="Pokemon" />
            </div>
          </div>
        </div>
      </Link>
    </BaseCard>
  );
}

export default PreviewCard;
