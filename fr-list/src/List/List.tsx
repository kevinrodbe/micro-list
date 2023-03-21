import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { listenEvent, destroyEvent } from '@cande/utils';
import { useFetchHarryPotter, useFetchRickAdnMorty } from 'domains/movie/services';

const Card = styled.div`
  border-radius: 20px;
  border: 1px solid #cacaca;
  border: 1px solid grey;
  display: flex;
  flex-wrap: wrap;
  max-width: 250px;
  overflow: hidden;
  width: 100%;
`;

const ImageBox = styled.figure`
  display: flex;
  margin-bottom: 15px;
  margin-top: 0;
  max-width: 250px;
  width: 100%;
`;

const Img = styled.img`
  height: 245px;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  column-gap: 10px;
  margin: 0 15px 15px;
`;

const Label = styled.p`
  font-weight: 500;
  margin: 0;
`;

const Text = styled.p`
  font-weight: 100;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const randomNumber = Math.floor(Math.random() * 5) + 3;

export const List = () => {
  const { t, i18n } = useTranslation();
  const [movieId, setMovieId] = useState('o1');
  const [isLoading, setIsLoading] = useState(false);
  const { data: rickAndMortyResponse, isFetching: rickAndMortyLoading } = useFetchRickAdnMorty({
    enabled: movieId === 'o1',
  });
  const { data: harryPotterResponse, isFetching: harrryPotterLoading } = useFetchHarryPotter({
    enabled: movieId === 'o2',
  });
  const [data, setData] = useState<typeof harryPotterResponse>();

  useEffect(() => {
    i18n.changeLanguage('es');
    const onChangeLang = (event) => {
      changeLanguage(event.detail);
    };
    const onChangeMovie = (event) => {
      setMovieId(event.detail);
    };

    listenEvent('@cande/header/change-lang', onChangeLang);
    listenEvent('@cande/category/change-movie', onChangeMovie);

    return () => {
      destroyEvent('@cande/header/change-lang', onChangeLang);
      destroyEvent('@cande/category/change-movie', onChangeMovie);
    };
  }, []);

  useEffect(() => {
    if (movieId === 'o1') {
      setIsLoading(rickAndMortyLoading);
      setData(rickAndMortyResponse);
    }
    if (movieId === 'o2') {
      setIsLoading(harrryPotterLoading);
      setData(harryPotterResponse);
    }
  }, [rickAndMortyLoading, harrryPotterLoading]);

  if (isLoading) {
    return (
      <Container>
        {Array(randomNumber)
          .fill(0)
          .map((_, idx) => (
            <ContentLoader key={idx} speed={2} width={250} height={338} viewBox="0 0 250 338">
              <rect x="0" y="0" width="247" height="247" />
              <rect x="0" y="265" width="70" height="15" />
              <rect x="85" y="265" width="130" height="15" />
              <rect x="0" y="300" width="70" height="15" />
              <rect x="85" y="300" width="100" height="15" />
            </ContentLoader>
          ))}
      </Container>
    );
  }

  return (
    <Container>
      {data?.records.map((movie) => (
        <Card key={movie.id}>
          <ImageBox>
            <Img src={movie.img} />
          </ImageBox>
          <div>
            <Description>
              <Label>{t('card.name')}: </Label>
              <Text>{movie.name}</Text>
            </Description>
            <Description>
              <Label>{t('card.gender')}: </Label>
              <Text>{movie.gender}</Text>
            </Description>
          </div>
        </Card>
      ))}
    </Container>
  );
};
