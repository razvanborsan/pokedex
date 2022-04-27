import React from 'react';

import { Image } from '@chakra-ui/react';

import capitalize from 'shared/helpers/capitalize';
import getTypeIcon from 'shared/helpers/getTypeIcon';
import pokemonEgg from 'images/pokemon_egg.svg';

import './TypeCard.css';

function TypeCard({ type }) {
  const icon = getTypeIcon(type);
  return (
    <span className="type-card-container">
      <Image
        src={icon}
        alt="Pokemon type icon"
        boxSize="12px"
        fallbackSrc={pokemonEgg}
      />
      {capitalize(type)}
    </span>
  );
}

export default TypeCard;
