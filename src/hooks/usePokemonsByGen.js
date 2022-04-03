import getPokemonIdFromUrl from '../shared/helpers/getPokemonIdFromUrl';
import useFetch from './useFetch';
import usePokemonList from './usePokemonList';

function usePokemonsByGen(generationURL) {
  const { data, error, loading } = useFetch(generationURL);
  const [pokemonList] = usePokemonList();

  return generationURL
    ? [data?.pokemon_species.sort(
      (pokemonA, pokemonB) => getPokemonIdFromUrl(pokemonA.url) - getPokemonIdFromUrl(pokemonB.url),
    ) || null, error, loading]
    : [pokemonList];
}

export default usePokemonsByGen;
