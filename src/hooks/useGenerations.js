import { useRecoilValue } from 'recoil';
import { generationsQuery } from 'queries';

function useGenerations() {
  const generations = useRecoilValue(generationsQuery);

  return generations;
}

export default useGenerations;
