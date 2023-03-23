import { fetcher } from '@cande/utils';

import { harryPotter, rickAndMortiMap } from './movie.map';

export const fetchRickAndMorti = () => {
  return fetcher()
    .get('https://rickandmortyapi.com/api/character')
    .then((r) => r?.data)
    .then(rickAndMortiMap.toDomain);
};

export const fetchHarryPotter = () => {
  return fetcher()
    .get('https://hp-api.onrender.com/api/characters')
    .then((r) => r.data)
    .then(harryPotter.toDomain);
};
