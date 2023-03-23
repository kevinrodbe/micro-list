import { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { listenEvent, destroyEvent } from '@cande/utils';

import { useFetchHarryPotter, useFetchRickAdnMorty } from 'domains/movie/services';
import { Container, Card, ImageBox, Img, Description, Label, Text } from './List.styles';
import { useLookupContext } from 'context/LookupContext';

const randomNumber = Math.floor(Math.random() * 5) + 3;

export const List = () => {
  const { t, i18n } = useTranslation();
  const { movies, languages } = useLookupContext();
  const [movieId, setMovieId] = useState(movies.default);
  const [isLoading, setIsLoading] = useState(false);
  const { data: rickAndMortyResponse, isFetching: rickAndMortyLoading } = useFetchRickAdnMorty({
    enabled: movieId === movies.m1.id,
  });
  const { data: harryPotterResponse, isFetching: harrryPotterLoading } = useFetchHarryPotter({
    enabled: movieId === movies.m2.id,
  });
  const [data, setData] = useState<typeof harryPotterResponse>();

  useEffect(() => {
    i18n.changeLanguage(languages.default);
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
    if (movieId === movies.m1.id) {
      setIsLoading(rickAndMortyLoading);
      setData(rickAndMortyResponse);
    }
    if (movieId === movies.m2.id) {
      setIsLoading(harrryPotterLoading);
      setData(harryPotterResponse);
    }
  }, [movieId, rickAndMortyLoading, harrryPotterLoading]);

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
