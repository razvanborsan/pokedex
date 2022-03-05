import React, { useState } from 'react';

import Card from './components/Card/Card';
import Search from './components/Search/Search';
import Title from './components/Title/Title';

import { isStringIncluded } from './shared/helpers';

import data from './data.json';

import './App.css';

function App() {
  const [filter, setFilter] = useState('');

  function getPokemonCards(pokemons) {
    return pokemons
      .filter((pokemon) => isStringIncluded(pokemon.name, filter)
      || pokemon.types.some((entry) => isStringIncluded(entry.type.name, filter))
      || pokemon.id === +filter)
      .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />);
  }

  return (
    <div className="App">
      <div className="appContainer">
        <div className="appHeader">
          <Title>Pokedex</Title>
          <Search placeholder="Search pokemon name, number or type..." value={filter} setValue={setFilter} />
        </div>
        <div className="pokemonContainer">
          {getPokemonCards(data)}
        </div>
      </div>
    </div>
  );
}

export default App;
