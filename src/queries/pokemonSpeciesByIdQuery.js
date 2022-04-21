import axios from 'axios';
import { selectorFamily } from 'recoil';

const getUrl = (id) => `https://pokeapi.co/api/v2/pokemon-species/${id}`;

const pokemonSpeciesByIdQuery = selectorFamily({
  key: 'pokemonSpeciesById',
  get: (id) => async () => {
    const response = await axios.get(getUrl(id));

    return response?.data;
  },
});

export default pokemonSpeciesByIdQuery;
