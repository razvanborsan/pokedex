const getPokemonIdFromUrl = (url) => +url.split('/').slice(-2)[0];

export default getPokemonIdFromUrl;
