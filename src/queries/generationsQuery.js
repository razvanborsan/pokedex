import axios from 'axios';
import { selector } from 'recoil';

const generationsQuery = selector({
  key: 'generations',
  get: async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/generation/');
    return response?.data?.results;
  },
});

export default generationsQuery;
