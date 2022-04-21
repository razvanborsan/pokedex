import axios from 'axios';
import { selectorFamily } from 'recoil';

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const pokemonByIdQuery = selectorFamily({
  key: 'pokemonById',
  get: (id) => async () => {
    if (id) {
      const pokemon = await axios.get(getPokemonUrl(id));

      return pokemon?.data;
    }
    return null;
  },
});

export default pokemonByIdQuery;
