import React from 'react';
import { capitalize } from 'shared/helpers';
import BaseCard from '../BaseCard/BaseCard';
import TypeCard from '../TypeCard/TypeCard';

import './ViewCard.css';

function InfoBlock({ headerText, contentText }) {
  return (
    <span className="pokemon-info-block">
      <div className="pokemon-info-header">{headerText}</div>
      <div className="pokemon-info-content">{contentText}</div>
    </span>
  );
}

function ViewCard({ pokemon }) {
  return (
    <BaseCard customClasses={`pokemon-artwork-card ${pokemon.types[0].type.name}`}>
      <div className="pokemon-artwork-card-header">
        <span className="pokemon-id-info">
          <div className="pokemon-name">{capitalize(pokemon.name)}</div>
          <div className="pokemon-id">
            #
            {pokemon.id.toString().padStart(3, '0')}
          </div>
        </span>

        <span className="pokemon-types-container">
          {pokemon.types.map((entry) => <TypeCard key={entry.slot} type={entry.type.name} />)}
        </span>
      </div>

      <img className="pokemon-artwork" src={pokemon.sprites.other.official_artwork.front_default} alt="Pokemon" />

      <div className="pokemon-info-container">
        <InfoBlock headerText="Hello" contentText="World" />
        <InfoBlock headerText="Hello" contentText="World" />
        <InfoBlock headerText="Hello" contentText="World" />
        <InfoBlock headerText="Hello" contentText="World" />
        <InfoBlock headerText="Hello" contentText="World" />
      </div>
    </BaseCard>
  );
}

export default ViewCard;
