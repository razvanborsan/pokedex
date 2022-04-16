import useFetch from './useFetch';

const POKEMON_BY_GEN_URL = 'https://pokeapi.co/api/v2/pokemon-form/';

function usePokemonFormById(id) {
  const { data, error, loading } = useFetch(`${POKEMON_BY_GEN_URL}${id}`);

  return { data: data || null, error, loading };
}

export default usePokemonFormById;
