import axios from 'axios';
import { selectorFamily } from 'recoil';

import getPokemonIdFromUrl from 'shared/helpers/getPokemonIdFromUrl';

const pokemonListQuery = selectorFamily({
  key: 'pokemonGenList',
  get: (generation) => async () => {
    if (generation !== '') {
      const response = await axios.get(generation);
      return response?.data?.pokemon_species?.sort(
        (pokeA, pokeB) => getPokemonIdFromUrl(pokeA.url) - getPokemonIdFromUrl(pokeB.url),
      );
    }

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=898');

    return response?.data?.results;
  },
});

export default pokemonListQuery;
