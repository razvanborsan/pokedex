import useFetch from './useFetch';

function usePokemonById(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const { data, error, loading } = useFetch(url);

  return { data, error, loading };
}

export default usePokemonById;
