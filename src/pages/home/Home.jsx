import React, { useEffect, useState } from 'react';

import PreviewCard from 'components/cards/PreviewCard/PreviewCard';
import Search from 'components/Search/Search';

import isStringIncluded from 'shared/helpers/isStringIncluded';

import './Home.css';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

function Home() {
  const [filter, setFilter] = useState('');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=21');
  const [pokes, setPokes] = useState([]);
  const { data } = useFetch(url);

  useEffect(async () => {
    if (data) {
      const promises = data.results.map((result) => axios.get(result.url));
      const resolved = await Promise.all(promises);
      setPokes([...pokes, ...resolved.map((answer) => answer.data)]);
    }
  }, [data]);

  const handleFilterChange = (newFilterValue) => {
    setFilter(newFilterValue);
  };

  function getPokemonCards(pokemons) {
    return pokemons?.reduce?.((accumulator, pokemon) => {
      if (isStringIncluded(pokemon.name, filter)
      || pokemon.types.some((entry) => isStringIncluded(entry.type.name, filter))
      || pokemon.id === +filter) {
        accumulator.push(<PreviewCard key={pokemon.id} pokemon={pokemon} />);
      }

      return accumulator;
    }, []) || [];
  }

  return (
    <>
      <div className="header-container">
        <Search placeholder="Search pokemon name, number or type..." value={filter} setValue={handleFilterChange} />
      </div>
      <div className="cards-container">
        {getPokemonCards(pokes)}
      </div>
      <div>
        <button type="button" onClick={() => setUrl(data.next)}>Load more pokemons</button>
      </div>
    </>
  );
}

export default Home;
