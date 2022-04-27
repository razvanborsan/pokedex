import { useRecoilValue } from 'recoil';
import { officialArtworkQuery } from 'queries';

function useOfficialArtwork(id) {
  const officialArtwork = useRecoilValue(officialArtworkQuery(id));

  return officialArtwork;
}

export default useOfficialArtwork;
