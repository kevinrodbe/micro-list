import { fetcher } from '@cande/utils';

export const fetchConfigs = () => {
  return fetcher()
    .get('https://raw.githubusercontent.com/kevinrodbe/mocky/main/micro-1/v1/configs.json')
    .then((r) => r?.data);
};
