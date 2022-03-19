import React from 'react';
import { Image } from 'react-img-placeholder';
import { Link } from 'react-router-dom';

import capitalize from 'shared/helpers/capitalize';

import pokemonEgg from 'images/pokemon_egg.png';

import BaseCard from '../BaseCard/BaseCard';
import TypeCard from '../TypeCard/TypeCard';

import './EvolutionCard.css';

function Evolution({ pokemon, pokemonType }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} id={pokemon.id}>
      <div className={`evolution-wrapper ${pokemonType}-hover`}>
        <div className="evolution-title">{capitalize(pokemon.name)}</div>
        <div className="evolution-id">
          #
          {pokemon.id.toString().padStart(3, '0')}
        </div>
        <Image src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon" width={150} height={150} placeholderSrc={pokemonEgg} />
        <div className="evolution-types-container">
          {pokemon.types.map((entry) => (
            <TypeCard key={entry.slot} type={entry.type.name} />
          ))}
        </div>
      </div>
    </Link>
  );
}

function EvolutionCard({ pokemonType, evolutions }) {
  return evolutions.map((evolutionLine) => (
    <BaseCard customClasses={`pokemon-evolutions-container ${pokemonType}`}>
      {
        evolutionLine.map((form) => <Evolution pokemon={form} pokemonType={pokemonType} />)
      }
    </BaseCard>
  ));
}

export default EvolutionCard;
