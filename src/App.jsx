import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Title from './components/Title/Title';

import data from './data.json';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <div className="appContainer">
        <div className="appHeader">
          <Title>Pokedex</Title>
          <input
            placeholder="Search pokemon..."
            maxLength="33"
            className="searchBar"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
        </div>
        <div className="pokemonContainer">
          {data
            .filter((pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase()))
            .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
