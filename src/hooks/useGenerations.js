import useFetch from './useFetch';

const POKEMON_BY_GEN_URL = 'https://pokeapi.co/api/v2/generation/';

function useGenerations() {
  const { data, error, loading } = useFetch(`${POKEMON_BY_GEN_URL}`);

  return [data?.results || null, error, loading];
}

export default useGenerations;
