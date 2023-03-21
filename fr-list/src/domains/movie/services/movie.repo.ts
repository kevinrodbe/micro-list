import { fetcher } from 'infra/http';
// TODO: import from utils
// import { fetcher } from '@cande/utils';

import { harryPotter, rickAndMortiMap } from './movie.map';
import { RickAndMortiResponse } from './movie.types';

export const fetchRickAndMorti = () => {
  return fetcher()
    .get<RickAndMortiResponse<{ gender: string; id: number; img: string; name: string }>>(
      'https://rickandmortyapi.com/api/character',
    )
    .then((r) => r?.data)
    .then(rickAndMortiMap.toDomain);
};

export const fetchHarryPotter = () => {
  return fetcher()
    .get('https://hp-api.onrender.com/api/characters')
    .then((r) => r.data)
    .then(harryPotter.toDomain);
};
