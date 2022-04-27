import React from 'react';

import { Image } from '@chakra-ui/react';

import { useOfficialArtwork } from 'hooks';
import capitalize, { capitalizeAllWords } from 'shared/helpers/capitalize';

import BaseCard from 'components/cards/BaseCard/BaseCard';
import TypeCard from 'components/cards/TypeCard/TypeCard';

import pokemonEgg from 'images/pokemon_egg.svg';

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

  const officialArtwork = useOfficialArtwork(pokemon?.id);

  return (
    <BaseCard customClasses="pokemon-artwork-card" types={pokemon.types}>
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

      <Image
        src={officialArtwork}
        alt="Pokemon"
        boxSize="400px"
        fallbackSrc={pokemonEgg}
      />

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
