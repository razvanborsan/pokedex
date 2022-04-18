import useFetch from './useFetch';

function usePokemonSpeciesById(id) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

  const { data, error, loading } = useFetch(url);

  return { data, error, loading };
}

export default usePokemonSpeciesById;
