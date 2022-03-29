import useFetch from './useFetch';

const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=898';

function usePokemonList() {
  const { data, error, loading } = useFetch(POKEMON_LIST_URL);

  return [data?.results || null, error, loading];
}

export default usePokemonList;
