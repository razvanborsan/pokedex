/* eslint-disable camelcase */
import React from 'react';
import BaseCard from '../BaseCard/BaseCard';

import './SpritesCard.css';

function Sprite({ title, imgSource }) {
  return (
    <div className="sprite">
      <div className="sprite-title">{title}</div>
      <img className="sprite-image" src={imgSource} alt="Pokemon" />
    </div>
  );
}

function SpritesCard({ pokemon }) {
  const {
    front_female,
    front_default,
    back_female,
    back_default,
    front_shiny_female,
    front_shiny,
    back_shiny_female,
    back_shiny,
  } = pokemon.sprites;
  return (
    <BaseCard customClasses={`sprites-container ${pokemon.types[0].type.name}`}>
      <h2>Sprites</h2>
      <div className="sprites">
        {front_female && <Sprite title="Front Female" imgSource={front_female} />}
        {front_default && <Sprite title="Front Female" imgSource={front_default} />}
        {back_female && <Sprite title="Front Female" imgSource={back_female} />}
        {back_default && <Sprite title="Front Female" imgSource={back_default} />}
        {front_shiny_female && <Sprite title="Front Female" imgSource={front_shiny_female} />}
        {front_shiny && <Sprite title="Front Female" imgSource={front_shiny} />}
        {back_shiny_female && <Sprite title="Front Female" imgSource={back_shiny_female} />}
        {back_shiny && <Sprite title="Front Female" imgSource={back_shiny} />}
      </div>
    </BaseCard>
  );
}

export default SpritesCard;
