import { useRecoilValue } from 'recoil';
import { pokemonFormByIdQuery } from 'queries';

function usePokemonFormById(id) {
  const form = useRecoilValue(pokemonFormByIdQuery(+id));

  return form;
}

export default usePokemonFormById;
