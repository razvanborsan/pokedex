import React from 'react';
import { Image } from '@chakra-ui/react';

import { usePokemonSprites } from 'hooks';
import { normalizeStringUnderscore } from 'shared/helpers/normalizeString';
import pokemonEgg from 'images/pokemon_egg.svg';
import BaseCard from 'components/cards/BaseCard/BaseCard';

import './SpritesCard.css';

function Sprite({ sprite }) {
  return (
    <div className="sprite">
      <div className="sprite-title">{normalizeStringUnderscore(sprite.title)}</div>

      <Image
        src={sprite.url}
        alt="Pokemon sprite"
        boxSize="120px"
        borderRadius="10px"
        fallbackSrc={pokemonEgg}
      />
    </div>
  );
}

function SpritesCard({ types, sprites }) {
  const updatedSprites = usePokemonSprites(sprites);
  return (
    <BaseCard types={types} customClasses="sprites-container">
      <div className="sprites">
        {updatedSprites.map((sprite) => (
          <Sprite
            key={sprite.title}
            sprite={sprite}
          />
        ))}
      </div>
    </BaseCard>
  );
}

export default SpritesCard;
