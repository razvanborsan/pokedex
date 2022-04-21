/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import NotFound from 'pages/404/NotFound';

import normalizeString from 'shared/helpers/normalizeString';
import { pokemonByIdQuery, pokemonSpeciesByIdQuery, evolutionChainQuery } from 'queries';

import Search from 'components/Search/Search';
import getPokemonSpriteUrl from 'shared/helpers/getPokemonSpriteUrl';
import ViewCard from 'components/cards/ViewCard/ViewCard';
import StatsCard from 'components/cards/StatsCard/StatsCard';
import EvolutionCard from 'components/cards/EvolutionCard/EvolutionCard';
import SpritesCard from 'components/cards/SpritesCard/SpritesCard';

import './Pokemon.css';

function Pokemon() {
  const { pokemonId } = useParams();

  const pokemon = useRecoilValue(pokemonByIdQuery(+pokemonId));
  const species = useRecoilValue(pokemonSpeciesByIdQuery(+pokemonId));
  const evoChain = useRecoilValue(evolutionChainQuery(species?.evolution_chain?.url));

  const descriptions = species.flavor_text_entries.filter((entry) => entry?.language?.name === 'en');

  const [currentDescription, setCurrentDescription] = useState(descriptions.find(
    (description) => description,
  ).flavor_text);

  if (Number.isNaN(+pokemonId) || +pokemonId < 1 || +pokemonId > 898) {
    return <NotFound />;
  }

  return (
    <div className="pokemon-content">
      <Flex justify="center" align="flex-start" direction="column">
        <Box width={400}>
          <Search />
        </Box>
        <Flex width="100%" justify="space-between" align="center" direction="row">
          <Box>
            <Image
              src={getPokemonSpriteUrl(pokemon?.id)}
              alt="sprite"
              boxSize="100px"
            />
          </Box>
          <Box>Next</Box>
        </Flex>
        <div className="pokemon-content-upper">
          <ViewCard pokemon={pokemon} species={species} />

          <div className="pokemon-trivia-container">
            <div className="pokemon-description-container">
              <div className="pokemon-description-title">
                <h2>Description</h2>
                <div className="pokemon-description-select">
                  <p>Game:</p>
                  <select onChange={(event) => setCurrentDescription(event.target.value)}>
                    {descriptions?.map(
                      (description) => (
                        <option
                          key={description?.version?.name}
                          value={description.flavor_text}
                        >
                          {normalizeString(description?.version?.name)}
                        </option>
                      ),
                    )}
                  </select>
                </div>
              </div>
              <p>{currentDescription}</p>
            </div>

            <div className="card-content-container">
              <h2>Stats</h2>
              <StatsCard types={pokemon?.types} stats={pokemon?.stats} />
            </div>
          </div>
        </div>

        <div className="card-content-container">
          <h2>Evolutions</h2>
          <Flex width="100%" justify="center" align="center">
            <EvolutionCard
              types={pokemon?.types}
              evolutions={evoChain}
            />
          </Flex>
        </div>

        <div className="pokemon-content-lower">
          <div className="card-content-container">
            <h2>Sprites</h2>
            <SpritesCard pokemon={pokemon} />
          </div>
        </div>
      </Flex>
    </div>
  );
}

export default Pokemon;
