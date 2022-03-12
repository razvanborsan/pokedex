import React from 'react';

import './EvolutionCard.css';

import data from 'data/data.json';
import { Link } from 'react-router-dom';
import { capitalize } from '../../../shared/helpers';
import BaseCard from '../BaseCard/BaseCard';

function Evolution({ pokemon, pokemonType }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} id={pokemon.id}>
      <div className={`evolution-wrapper ${pokemonType}-hover`}>
        <div className="evolution-title">{capitalize(pokemon.name)}</div>
        <div className="evolution-id">
          #
          {pokemon.id.toString().padStart(3, '0')}
        </div>
        <img src={pokemon.sprites.other.official_artwork.front_default} alt="Pokemon" />
      </div>
    </Link>
  );
}

function EvolutionCard({ pokemonType }) {
  return (
    <BaseCard customClasses={`pokemon-evolutions-container ${pokemonType}`}>
      <Evolution pokemon={data[0]} pokemonType={pokemonType} />
      <Evolution pokemon={data[1]} pokemonType={pokemonType} />
      <Evolution pokemon={data[2]} pokemonType={pokemonType} />
    </BaseCard>
  );
}

export default EvolutionCard;
