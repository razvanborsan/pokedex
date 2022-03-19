/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFound from 'pages/404/NotFound';

import ViewCard from 'components/cards/ViewCard/ViewCard';
import StatsCard from 'components/cards/StatsCard/StatsCard';
import EvolutionCard from 'components/cards/EvolutionCard/EvolutionCard';
import SpritesCard from 'components/cards/SpritesCard/SpritesCard';

import './Pokemon.css';
import axios from 'axios';
import usePokemonById from '../../hooks/usePokemonById';
import usePokemonSpeciesById from '../../hooks/usePokemonSpeciesById';
import normalizeString from '../../shared/helpers/normalizeString';

const fetchEvolutionChain = (url) => {
  if (url) {
    return axios.get(url);
  }
  return null;
};

const getPokemonByName = (name) => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

const getAllEvolutions = async (chain) => {
  const initial = getPokemonByName(chain?.species?.name);
  const evolutions = [];

  const evos = [initial];

  for (const evolution of chain.evolves_to) {
    const firstEvolution = getPokemonByName(evolution.species.name);
    evos.push(firstEvolution);

    if (evolution.evolves_to?.length) {
      for (const secondEvolution of evolution.evolves_to) {
        const second = getPokemonByName(secondEvolution.species.name);
        evos.push(second);
      }
    }
  }

  const resolved = await Promise.all(evos);

  for (const evolution of chain.evolves_to) {
    const ceva = resolved.map((response) => response.data);
    const initialEvolution = ceva.find((pokemon) => pokemon.name === chain?.species?.name);
    const firstEvolution = ceva.find((pokemon) => pokemon.name === evolution.species.name);
    const evolutionLine = [initialEvolution, firstEvolution];

    if (evolution.evolves_to.length) {
      for (const secondEvolution of evolution.evolves_to) {
        const second = ceva.find((pokemon) => pokemon.name === secondEvolution.species.name);
        evolutions.push([...evolutionLine, second]);
      }
    } else {
      evolutions.push(evolutionLine);
    }
  }

  return evolutions;
};

function Pokemon() {
  const { pokemonId } = useParams();
  if (Number.isNaN(+pokemonId) || +pokemonId < 1 || +pokemonId > 811) {
    return <NotFound />;
  }

  const { data: pokemon, loading } = usePokemonById(pokemonId);
  const { data: species } = usePokemonSpeciesById(pokemonId);

  const [evoChain, setEvoChain] = useState([]);
  const descriptions = species?.flavor_text_entries.filter((entry) => entry?.language?.name === 'en');
  const [currDesc, setCurrDesc] = useState(descriptions?.find((description) => description) || '');

  useEffect(async () => {
    if (species?.evolution_chain?.url) {
      const evolutions = await fetchEvolutionChain(species?.evolution_chain?.url);
      const allEvo = await getAllEvolutions(evolutions?.data?.chain);
      setEvoChain(allEvo || []);
    }

    if (species?.flavor_text_entries) {
      setCurrDesc(species?.flavor_text_entries.filter((entry) => entry.language.name === 'en').find((e) => e).flavor_text);
    }
  }, [species]);

  return (
    <div className="pokemon-content">
      {loading
        ? <div>Loading</div>
        : (
          <>
            <div className="pokemon-content-upper">
              <ViewCard pokemon={pokemon} species={species} />

              <div className="pokemon-trivia-container">
                <div className="pokemon-description-container">
                  <div className="pokemon-description-title">
                    <h2>Description</h2>
                    <div className="pokemon-description-select">
                      <p>Game:</p>
                      <select onChange={(event) => setCurrDesc(event.target.value)}>
                        {descriptions?.map(
                          (description) => (
                            <option value={description?.flavor_text}>
                              {normalizeString(description?.version?.name)}
                            </option>
                          ),
                        )}
                      </select>
                    </div>
                  </div>
                  <p>{currDesc}</p>
                </div>

                <div className="card-content-container">
                  <h2>Stats</h2>
                  <StatsCard pokemonType={pokemon?.types[0]?.type?.name} stats={pokemon?.stats} />
                </div>
              </div>
            </div>

            <div className="card-content-container">
              <h2>Evolutions</h2>
              <EvolutionCard pokemonType={pokemon?.types[0]?.type?.name} evolutions={evoChain} />
            </div>

            <div className="pokemon-content-lower">
              <div className="card-content-container">
                <h2>Sprites</h2>
                <SpritesCard pokemon={pokemon} />
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default Pokemon;
