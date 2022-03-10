import React, { useState } from 'react';

import PreviewCard from 'components/cards/PreviewCard/PreviewCard';
import Search from 'components/Search/Search';

import { isStringIncluded } from 'shared/helpers';

import pokemons from 'data/data.json';

import './Home.css';

function Home() {
  const [filter, setFilter] = useState('');

  function getPokemonCards(data) {
    return data.reduce((accumulator, pokemon) => {
      if (isStringIncluded(pokemon.name, filter)
      || pokemon.types.some((entry) => isStringIncluded(entry.type.name, filter))
      || pokemon.id === +filter) {
        accumulator.push(<PreviewCard key={pokemon.id} pokemon={pokemon} />);
      }

      return accumulator;
    }, []);
  }

  return (
    <>
      <div className="header-container">
        <h1 className="pokedex-title">Pokedex</h1>
        <Search placeholder="Search pokemon name, number or type..." value={filter} setValue={setFilter} />
      </div>
      <div className="cards-container">
        {getPokemonCards(pokemons)}
      </div>
    </>
  );
}

export default Home;
