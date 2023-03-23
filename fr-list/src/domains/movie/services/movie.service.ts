import { useQuery } from 'react-query';
import { fetchHarryPotter, fetchRickAndMorti } from './movie.repo';

const RICK_AND_MORTI_KEY = 'fetchRickAndMorti';
const HARRY_POTTER_KEY = 'fetchHarryPotter';

export const useFetchRickAdnMorty = (opts?) => {
  return useQuery([RICK_AND_MORTI_KEY], fetchRickAndMorti, { staleTime: Infinity, ...opts });
};

export const useFetchHarryPotter = (opts?) => {
  return useQuery([HARRY_POTTER_KEY], fetchHarryPotter, { staleTime: Infinity, ...opts });
};
