import axios from 'axios';
import { selectorFamily } from 'recoil';

const evolutionChainQuery = selectorFamily({
  key: 'evolutionChain',
  get: (url) => async () => {
    const response = await axios.get(url);
    return response?.data?.chain;
  },
});

export default evolutionChainQuery;
