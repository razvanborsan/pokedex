import React from 'react';
import {
  Center, Divider, Flex, Skeleton, Text,
} from '@chakra-ui/react';

import EvolutionCardSkeleton from 'components/cards/EvolutionCard/EvolutionCardSkeleton';
import PokemonHeaderCardSkeleton from 'components/cards/PokemonHeaderCard/PokemonHeaderCardSkeleton';
import SpritesCardSkeleton from 'components/cards/SpritesCard/SpritesCardSkeleton';
import StatsCardSkeleton from 'components/cards/StatsCard/StatsCardSkeleton';
import ViewCardSkeleton from 'components/cards/ViewCard/ViewCardSkeleton';
import SearchSkeleton from 'components/Search/SearchSkeleton';

import './Pokemon.css';

function PokemonSkeleton() {
  return (
    <div className="pokemon-content">
      <Flex width="1080px" justify="center" align="flex-start" direction="column">
        <SearchSkeleton />
        <PokemonHeaderCardSkeleton />

        <Center width="100%" height="30px">
          <Divider width="100%" height="2px" backgroundColor="#042440" borderRadius="2px" />
        </Center>
        <div className="pokemon-content-upper">
          <ViewCardSkeleton />

          <div className="pokemon-trivia-container">
            <div className="pokemon-description-container">
              <div className="pokemon-description-title">
                <Text fontSize="2xl">Description</Text>
              </div>

              <div className="pokemon-description-select">
                Game:
                <Skeleton width="230px" borderRadius="10px" height="40px" />
              </div>

              <Skeleton width="500px" borderRadius="10px" height="48px" />
            </div>

            <div className="card-content-container">
              <Text fontSize="2xl">Stats</Text>
              <StatsCardSkeleton />
            </div>
          </div>
        </div>

        <div className="card-content-container">
          <Text fontSize="2xl">Evolutions</Text>
          <Flex width="100%" justify="center" align="center">
            <EvolutionCardSkeleton />
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
              <Skeleton width="269px" borderRadius="10px" height="40px" />
            </Flex>
            <SpritesCardSkeleton />
          </div>
        </div>
      </Flex>
    </div>
  );
}

export default PokemonSkeleton;
