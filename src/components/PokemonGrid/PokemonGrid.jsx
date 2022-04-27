import { Box, Flex, Text } from '@chakra-ui/react';
import React, { Suspense, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { nanoid } from 'nanoid';

import getPokemonIdFromUrl from 'shared/helpers/getPokemonIdFromUrl';
import PreviewCard from 'components/cards/PreviewCard/PreviewCard';
import PreviewCardSkeleton from 'components/cards/PreviewCard/PreviewCardSkeleton';
import { usePokemonList } from 'hooks';

const POKEMON_PAGE_SIZE = 20;
const skeleton = (() => [...Array(4)].map(() => nanoid()))();

function getPokemon(currentPage, pokemonList) {
  return pokemonList.slice(0, currentPage * POKEMON_PAGE_SIZE).map((result) => ({
    name: result.name,
    url: result.url,
    id: getPokemonIdFromUrl(result.url),
  }));
}

function renderedPokemonsNr(currentPage, pokemonList) {
  return pokemonList.slice(0, currentPage * POKEMON_PAGE_SIZE).length;
}

function getPokemonCards(pokemons) {
  return pokemons?.reduce?.((accumulator, pokemon) => {
    accumulator.push(
      <Suspense key={pokemon.id} fallback={<PreviewCardSkeleton />}>
        <PreviewCard pokemon={pokemon} />
      </Suspense>,
    );
    return accumulator;
  }, []);
}

function PokemonGrid({ selectedGen }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pokemonList = usePokemonList(selectedGen);

  return (
    <Box marginTop={10}>
      <Box>
        <Text marginLeft={55} fontSize="xl">
          Total pokemons:
          {' '}
          {pokemonList?.length || 0}
        </Text>

      </Box>
      <InfiniteScroll
        loadMore={() => setCurrentPage(currentPage + 1)}
        hasMore={renderedPokemonsNr(currentPage, pokemonList) !== pokemonList.length}
        loader={(
          <Flex
            key="pokemon-grid-loader"
            justify="center"
            align="center"
            marginTop={-5}
            width={1080}
            wrap="wrap"
          >
            {skeleton.map((id) => <PreviewCardSkeleton key={id} />)}
          </Flex>
        )}
        useWindow
      >
        <Box className="cards-container">
          {getPokemonCards(getPokemon(currentPage, pokemonList))}
        </Box>

      </InfiniteScroll>
    </Box>
  );
}

export default PokemonGrid;
