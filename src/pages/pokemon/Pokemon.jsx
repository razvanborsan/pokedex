import React from 'react';
import { useParams } from 'react-router-dom';

import data from 'data/data.json';

import NotFound from 'pages/404/NotFound';

import './Pokemon.css';
import { capitalize } from '../../shared/helpers';

function Pokemon() {
  const { pokemonId } = useParams();
  if (Number.isNaN(+pokemonId) || +pokemonId < 1 || +pokemonId > 811) {
    return <NotFound />;
  }

  const pokemon = data.find((entry) => entry.id === +pokemonId);

  return (
    <div className="pokemon-content">
      <div className="pokemon-artwork-card">
        <div className="pokemon-artwork-card-header">
          <span className="pokemon-id-info">
            <div>{capitalize(pokemon.name)}</div>
            <div>
              #
              {pokemon.id.toString().padStart(3, '0')}
            </div>
          </span>

          <span className="pokemon-types-container">
            {pokemon.types.map((entry) => entry.type.name)}
          </span>
        </div>

        <img className="pokemon-artwork" src={pokemon.sprites.other.official_artwork.front_default} alt="Pokemon" />

        <div className="pokemon-info-container">
          <span className="pokemon-info-block">
            <div className="pokemon-info-header">Height</div>
            <div className="pokemon-info-content">8.03m</div>
          </span>

          <span className="pokemon-info-block">
            <div className="pokemon-info-header">Weight</div>
            <div className="pokemon-info-content">90kg</div>
          </span>

          <span className="pokemon-info-block">
            <div className="pokemon-info-header">Egg Groups</div>
            <div className="pokemon-info-content">Monster, Dragon</div>
          </span>

          <span className="pokemon-info-block">
            <div className="pokemon-info-header">Hatch Steps</div>
            <div className="pokemon-info-content">7650</div>
          </span>

          <span className="pokemon-info-block">
            <div className="pokemon-info-header">Abilities</div>
            <div className="pokemon-info-content">snow warning, refrigerate</div>
          </span>
        </div>
      </div>

      <div className="pokemon-trivia-container">
        <div className="pokemon-description-container">
          <h3>Description</h3>
          <p>
            The diamond shape crystals on its body exper air as
            cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice
          </p>
        </div>

        <div className="pokemon-stats-container" />

        <div className="pokemon-evolutions-container" />
      </div>
    </div>
  );
}

export default Pokemon;
