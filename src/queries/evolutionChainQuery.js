import axios from 'axios';
import { selectorFamily } from 'recoil';

const evolutionChainQuery = selectorFamily({
  key: 'evolutionChain',
  get: (url) => async () => {
    if (url) {
      const response = await axios.get(url);
      return response?.data?.chain;
    }
    return null;
  },
});

export default evolutionChainQuery;
