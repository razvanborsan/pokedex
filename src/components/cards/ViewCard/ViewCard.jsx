import React from 'react';
import { Image } from 'react-img-placeholder';
import capitalize, { capitalizeAllWords } from 'shared/helpers/capitalize';
import pokemonEgg from 'images/pokemon_egg.svg';
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

function ViewCard({ pokemon, species }) {
  function getPokemonTypeCards() {
    return pokemon.types.map((entry) => <TypeCard key={entry.slot} type={entry.type.name} />);
  }

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
          {getPokemonTypeCards()}
        </span>
      </div>

      <Image src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon" width={400} height={400} placeholderSrc={pokemonEgg} />

      <div className="pokemon-info-container">
        <InfoBlock headerText="Weight" contentText={`${pokemon.weight / 10} kg`} />
        <InfoBlock headerText="Height" contentText={`${pokemon.height / 10} meters`} />
        <InfoBlock headerText="Color" contentText={`${capitalize(species?.color?.name)}`} />
        <InfoBlock headerText="Habitat" contentText={`${capitalizeAllWords(species?.habitat?.name)}`} />
        <InfoBlock headerText="Shape" contentText={`${capitalize(species?.shape?.name)}`} />
      </div>
    </BaseCard>
  );
}

export default ViewCard;
