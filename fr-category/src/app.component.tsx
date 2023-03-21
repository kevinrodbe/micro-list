import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { emitEvent } from '@cande/utils';

const Box = styled.div`
  align-content: center;
  column-gap: 40px;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1440;
`;

const Button = styled.button`
  background: none;
  border-radius: 50px;
  border: 3px solid orange;
  box-shadow: none;
  color: orange;
  cursor: pointer;
  font-size: 32px;
  min-width: 220px;
  padding: 15px 25px;
  transition: all 0.3s ease;

  &:hover {
    background-color: orange;
    border-color: orange;
    color: #fff;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: orange;
      border-color: orange;
      color: #fff;
    `}
`;

const OPTIONS = {
  o1: {
    id: 'o1',
    label: 'Rick 👨🏻‍🔬',
  },
  o2: {
    id: 'o2',
    label: 'Harry 🧙🏻',
  },
};

export default function App() {
  const [movieId, setMovieId] = useState();
  const changeMovie = (id) => {
    setMovieId(id);
    emitEvent('@cande/category/change-movie', id);
  };

  useEffect(() => {
    changeMovie(OPTIONS.o1.id);
  }, []);

  return (
    <Box>
      <Button onClick={() => changeMovie(OPTIONS.o1.id)} selected={movieId === OPTIONS.o1.id}>
        {OPTIONS.o1.label}
      </Button>
      <Button onClick={() => changeMovie(OPTIONS.o2.id)} selected={movieId === OPTIONS.o2.id}>
        {OPTIONS.o2.label}
      </Button>
    </Box>
  );
}
