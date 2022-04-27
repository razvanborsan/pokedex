import { selectorFamily } from 'recoil';
import axios from 'axios';

const pokemonFormByIdQuery = selectorFamily({
  key: 'pokemonForm',
  get: (pokeId) => async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokeId}`);

    return response?.data;
  },
});

export default pokemonFormByIdQuery;
