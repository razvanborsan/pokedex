import React, { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';

import usePokemonList from 'hooks/usePokemonList';

import PreviewCard from 'components/cards/PreviewCard/PreviewCard';
import Search from 'components/Search/Search';

import './Home.css';
import { Box } from '@chakra-ui/react';
import PageLoader from '../../components/PageLoader/PageLoader';

const POKEMON_PAGE_SIZE = 20;

function Home() {
  const [pokemonsToRender, setPokemonsToRender] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [pokemonList] = usePokemonList();

  useEffect(() => {
    if (pokemonList) {
      const pokemonSublist = pokemonList.slice(0, currentPage * POKEMON_PAGE_SIZE);

      setPokemonsToRender(pokemonSublist.map((result, index) => ({
        name: result.name,
        url: result.url,
        id: index + 1,
      })));
    }
  }, [currentPage, pokemonList]);

  function getPokemonCards(pokemons) {
    return pokemons?.reduce?.((accumulator, pokemon) => {
      accumulator.push(<PreviewCard key={pokemon.id} pokemon={pokemon} />);

      return accumulator;
    }, []);
  }

  return (
    <>
      <Box className="header-container">
        <Search />
      </Box>

      {pokemonsToRender?.length ? (
        <InfiniteScroll
          loadMore={() => setCurrentPage(currentPage + 1)}
          hasMore={pokemonsToRender.length !== pokemonList?.length}
          loader={<PageLoader key={0} />}
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
