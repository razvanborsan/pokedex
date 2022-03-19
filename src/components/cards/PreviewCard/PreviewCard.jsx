import React from 'react';
import { Image } from 'react-img-placeholder';
import { Link } from 'react-router-dom';

import capitalize from 'shared/helpers/capitalize';
import pokemonEgg from 'images/pokemon_egg.png';

import BaseCard from '../BaseCard/BaseCard';
import TypeCard from '../TypeCard/TypeCard';

import 'shared/styles/pokemonTypes.css';
import './PreviewCard.css';

function PreviewCard({ pokemon }) {
  return (
    <BaseCard customClasses={`preview-card ${pokemon.types[0].type.name}`}>
      <Link to={`/pokemon/${pokemon.id}`} id={pokemon.id}>
        <div className="card-content">
          <div className="card-header">
            <h3>{capitalize(pokemon.name)}</h3>
            <h4>
              #
              {pokemon.id.toString().padStart(3, '0')}
            </h4>
          </div>

          <div className="card-body">
            <div className="pokemon-types-wrapper">
              {pokemon.types.map((entry) => (
                <TypeCard key={entry.slot} type={entry.type.name} />
              ))}
            </div>
            <div className="pokemon-photo">
              <Image src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon" width={100} height={100} placeholderSrc={pokemonEgg} />
            </div>
          </div>
        </div>
      </Link>
    </BaseCard>
  );
}

export default PreviewCard;
