import React from 'react';
import { useParams } from 'react-router-dom';

import data from 'data/data.json';

import NotFound from 'pages/404/NotFound';

import './Pokemon.css';
import ViewCard from '../../components/cards/ViewCard/ViewCard';
import StatsCard from '../../components/cards/StatsCard/StatsCard';
import EvolutionCard from '../../components/cards/EvolutionCard/EvolutionCard';
import SpritesCard from '../../components/cards/SpritesCard/SpritesCard';

function Pokemon() {
  const { pokemonId } = useParams();
  if (Number.isNaN(+pokemonId) || +pokemonId < 1 || +pokemonId > 811) {
    return <NotFound />;
  }

  const pokemon = data.find((entry) => entry.id === +pokemonId);

  return (
    <div className="pokemon-content">
      <div className="pokemon-content-upper">
        <ViewCard pokemon={pokemon} />

        <div className="pokemon-trivia-container">
          <div className="pokemon-description-container">
            <h3>Description</h3>
            <p>
              The diamond shape crystals on its body exper air as
              cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice
            </p>
          </div>

          <StatsCard pokemonType={pokemon.types[0].type.name} />

          <EvolutionCard pokemonType={pokemon.types[0].type.name} />
        </div>
      </div>
      <div className="pokemon-content-lower">
        <SpritesCard pokemon={pokemon} />
      </div>
    </div>
  );
}

export default Pokemon;
