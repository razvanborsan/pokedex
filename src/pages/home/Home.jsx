import React, { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { Box, Flex, Select } from '@chakra-ui/react';

import PreviewCard from 'components/cards/PreviewCard/PreviewCard';
import Search from 'components/Search/Search';
import PageLoader from 'components/PageLoader/PageLoader';

import usePokemonsByGen from 'hooks/usePokemonsByGen';
import useGenerations from 'hooks/useGenerations';

import capitalize, { capitalizeAllLetters } from 'shared/helpers/capitalize';
import getPokemonIdFromUrl from 'shared/helpers/getPokemonIdFromUrl';

import './Home.css';

const POKEMON_PAGE_SIZE = 20;

const formatGenerationName = (name) => `${capitalize(name.split('-')[0])} ${capitalizeAllLetters(name.split('-')[1])}`;

function getPokemonCards(pokemons) {
  return pokemons?.reduce?.((accumulator, pokemon) => {
    accumulator.push(<PreviewCard key={pokemon.id} pokemon={pokemon} />);

    return accumulator;
  }, []);
}

function Home() {
  const [pokemonsToRender, setPokemonsToRender] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGen, setSelectedGen] = useState('');

  const [generations] = useGenerations();
  const [pokemonList] = usePokemonsByGen(selectedGen);

  const handleGenerationChange = (e) => {
    setSelectedGen(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (pokemonList) {
      const pokemonSublist = pokemonList.slice(0, currentPage * POKEMON_PAGE_SIZE);

      setPokemonsToRender(pokemonSublist.map((result) => ({
        name: result.name,
        url: result.url,
        id: getPokemonIdFromUrl(result.url),
      })));
    }
  }, [currentPage, pokemonList]);

  return (
    <>
      <Flex gap={30} justify align="center" className="header-container">
        <Box width={400}>
          <Search />
        </Box>

        <Select
          width={250}
          variant="outline"
          placeholder="Select a Generation"
          size="lg"
          onChange={handleGenerationChange}
        >
          {generations?.map((gen) => (
            <option key={gen.name} value={gen.url}>
              {formatGenerationName(gen?.name)}
              {' '}
            </option>
          ))}
        </Select>

        <Box>
          Total pokemons:
          {' '}
          {pokemonList?.length || 0}
        </Box>
      </Flex>

      {pokemonsToRender?.length ? (
        <InfiniteScroll
          loadMore={() => setCurrentPage(currentPage + 1)}
          hasMore={pokemonsToRender.length !== pokemonList?.length}
          loader={<PageLoader key={0} />}
          useWindow
        >
          <Box className="cards-container">
            {getPokemonCards(pokemonsToRender)}
          </Box>
        </InfiniteScroll>
      ) : (
        <PageLoader />
      )}
    </>
  );
}

export default Home;
