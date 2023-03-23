import { useEffect, useState } from 'react';

import { emitEvent } from '@cande/utils';

import { Box, Button } from './Category.styles';
import { useLookupContext } from 'context/LookupContext';

export const Category = () => {
  const [movieId, setMovieId] = useState();
  const { movies } = useLookupContext();

  const changeMovie = (id) => {
    setMovieId(id);
    emitEvent('@cande/category/change-movie', id);
  };

  useEffect(() => {
    changeMovie(movies.default);
  }, []);

  return (
    <Box>
      <Button onClick={() => changeMovie(movies.m1.id)} selected={movieId === movies.m1.id}>
        {movies.m1.label}
      </Button>
      <Button onClick={() => changeMovie(movies.m2.id)} selected={movieId === movies.m2.id}>
        {movies.m2.label}
      </Button>
    </Box>
  );
};
