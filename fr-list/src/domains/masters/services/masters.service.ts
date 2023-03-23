import { useQuery } from 'react-query';

import { fetchConfigs } from './masters.repo';

const CONFIGS_KEY = 'fetchConfigs';

export const useFetchConfig = (opts?) => {
  return useQuery([CONFIGS_KEY], fetchConfigs, opts);
};
