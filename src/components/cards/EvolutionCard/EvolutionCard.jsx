import React from 'react';

import './EvolutionCard.css';

import data from 'data/data.json';
import { capitalize } from '../../../shared/helpers';
import BaseCard from '../BaseCard/BaseCard';

function Evolution({ pokemon }) {
  return (
    <div className="evolution-wrapper">
      <div className="evolution-title">{capitalize(pokemon.name)}</div>
      <div className="evolution-id">
        #
        {pokemon.id.toString().padStart(3, '0')}
      </div>
      <img src={pokemon.sprites.other.official_artwork.front_default} alt="Pokemon" />
    </div>
  );
}

function EvolutionCard({ pokemonType }) {
  return (
    <BaseCard customClasses={`pokemon-evolutions-container ${pokemonType}`}>
      <Evolution pokemon={data[0]} />
      <Evolution pokemon={data[1]} />
      <Evolution pokemon={data[2]} />
    </BaseCard>
  );
}

export default EvolutionCard;
