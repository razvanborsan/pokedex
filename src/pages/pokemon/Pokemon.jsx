import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Center, Divider, Flex, Select, Text,
} from '@chakra-ui/react';

import NotFound from 'pages/404/NotFound';

import Search from 'components/Search/Search';
import ViewCard from 'components/cards/ViewCard/ViewCard';
import StatsCard from 'components/cards/StatsCard/StatsCard';
import EvolutionCard from 'components/cards/EvolutionCard/EvolutionCard';
import SpritesCard from 'components/cards/SpritesCard/SpritesCard';
import PokemonHeaderCard from 'components/cards/PokemonHeaderCard/PokemonHeaderCard';
import { useEvolutionChain, usePokemonById, usePokemonSpeciesById } from 'hooks';

import getSpriteVersions from './helpers/getSpriteVersions';
import getDescriptionSelectOptions from './helpers/getDescriptionSelectOptions';
import getSpriteVersionSelectOptions from './helpers/getSpriteVersionSelectOptions';
import './Pokemon.css';

function Pokemon() {
  const { pokemonId } = useParams();

  const pokemon = usePokemonById(pokemonId);
  const species = usePokemonSpeciesById(+pokemonId);
  const evoChain = useEvolutionChain(species?.evolution_chain?.url);

  const descriptions = species?.flavor_text_entries?.filter((entry) => entry?.language?.name === 'en');
  const [currentDescription, setCurrentDescription] = useState(descriptions?.find(
    (description) => description,
  ).flavor_text);

  const { other, versions, ...defaultSprites } = pokemon?.sprites || {};
  const [currentSprites, setCurrentSprites] = useState(JSON.stringify(defaultSprites));
  const spritesVersions = getSpriteVersions(versions, defaultSprites, +pokemonId);

  useEffect(() => {
    setCurrentSprites(JSON.stringify(defaultSprites));
  }, [pokemonId]);

  useEffect(() => {
    setCurrentDescription(descriptions?.find(
      (description) => description,
    ).flavor_text);
  }, [pokemonId]);

  if (Number.isNaN(+pokemonId) || +pokemonId < 1 || +pokemonId > 898) {
    return <NotFound />;
  }

  return (
    <div className="pokemon-content">
      <Flex width={1080} justify="center" align="flex-start" direction="column">
        <Box width={400}>
          <Search />
        </Box>
        <PokemonHeaderCard pokemon={pokemon} />
        <Center width="100%" height="30px">
          <Divider width="100%" height="2px" backgroundColor="#042440" borderRadius="2px" />
        </Center>
        <div className="pokemon-content-upper">
          <ViewCard pokemon={pokemon} species={species} />

          <div className="pokemon-trivia-container">
            <div className="pokemon-description-container">
              <div className="pokemon-description-title">
                <Text fontSize="2xl">Description</Text>
              </div>
              <div className="pokemon-description-select">
                <p>Game:</p>
                <Select value={currentDescription} variant="filled" onChange={(event) => setCurrentDescription(event.target.value)}>
                  {getDescriptionSelectOptions(descriptions)}
                </Select>
              </div>
              <p>{currentDescription}</p>
            </div>

            <div className="card-content-container">
              <Text fontSize="2xl">Stats</Text>
              <StatsCard types={pokemon?.types} stats={pokemon?.stats} />
            </div>
          </div>
        </div>

        <div className="card-content-container">
          <Text fontSize="2xl">Evolutions</Text>
          <Flex width="100%" justify="center" align="center">
            <EvolutionCard
              types={pokemon?.types}
              evolutions={evoChain}
            />
          </Flex>
        </div>

        <div className="pokemon-content-lower">
          <div className="card-content-container">
            <Text fontSize="2xl">Sprites</Text>
            <Flex
              justify="center"
              align="center"
              gap="10px"
            >
              Version:
              {' '}
              <Select value={currentSprites} variant="filled" onChange={(event) => setCurrentSprites(event.target.value)}>
                {getSpriteVersionSelectOptions(spritesVersions)}
              </Select>
            </Flex>
            <SpritesCard types={pokemon.types} sprites={JSON.parse(currentSprites)} />
          </div>
        </div>
      </Flex>
    </div>
  );
}

export default Pokemon;
