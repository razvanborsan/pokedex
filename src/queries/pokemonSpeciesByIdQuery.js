import axios from 'axios';
import { selectorFamily } from 'recoil';

const getUrl = (id) => `https://pokeapi.co/api/v2/pokemon-species/${id}`;

const pokemonSpeciesByIdQuery = selectorFamily({
  key: 'pokemonSpeciesById',
  get: (id) => async () => {
    if (typeof id === 'number' && !Number.isNaN(id) && id <= 898) {
      const response = await axios.get(getUrl(id));

      return response?.data;
    }
    return null;
  },
});

export default pokemonSpeciesByIdQuery;
