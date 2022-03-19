import React from 'react';
import { Image } from 'react-img-placeholder';

import capitalize from 'shared/helpers/capitalize';
import getTypeIcon from 'shared/helpers/getTypeIcon';
import pokemonEgg from 'images/pokemon_egg.png';

import './TypeCard.css';

function TypeCard({ type }) {
  const icon = getTypeIcon(type);
  return (
    <span className="type-card-container">
      {/* <img className="type-icon" src={icon} alt="Pokemon type icon" /> */}
      <Image src={icon} alt="Pokemon type icon" width={12} height={12} placeholderSrc={pokemonEgg} />
      {capitalize(type)}
    </span>
  );
}

export default TypeCard;
