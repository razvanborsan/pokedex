import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { AsyncSelect } from 'chakra-react-select';

import { pokemonListQuery } from 'queries';
import normalizeString from 'shared/helpers/normalizeString';

import customComponents from './constants';

function Search() {
  const [pokemonOptions, setPokemonOptions] = useState([]);

  const pokemons = useRecoilValue(pokemonListQuery(''));
  const navigate = useNavigate();

  useEffect(() => {
    if (pokemons) {
      setPokemonOptions(pokemons.map((pokemon) => ({
        label: normalizeString(pokemon.name),
        val: +pokemon.url.split('/').splice(-2).shift(),
      })));
    }
  }, [pokemons]);

  const filterPokemons = (input) => pokemonOptions?.filter(
    (pokemon) => (pokemon.label.toLowerCase().includes(input.toLowerCase())
      || +pokemon.val === +input),
  );

  const promiseOptions = (input) => new Promise((resolve) => {
    resolve(filterPokemons(input).slice(0, 4));
  });

  const handleOnChange = (pokemon) => navigate(`/pokemon/${pokemon.val}`);

  return (
    <AsyncSelect
      size="lg"
      className="pokemon-select"
      placeholder="Search pokemon name or Pokedex number..."
      loadOptions={promiseOptions}
      onChange={handleOnChange}
      components={customComponents}
    />
  );
}

export default Search;
