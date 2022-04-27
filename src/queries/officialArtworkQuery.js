import axios from 'axios';
import { selectorFamily } from 'recoil';

const officialArtworkQuery = selectorFamily({
  key: 'officialArtwork',
  get: (id) => async () => {
    const response = await axios.get(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      {
        responseType: 'arraybuffer',
      },
    );

    const base64 = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        '',
      ),
    );

    return `data:image/jpeg;base64,${base64}`;
  },
});

export default officialArtworkQuery;
