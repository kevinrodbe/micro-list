import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 20px;
  border: 1px solid #cacaca;
  border: 1px solid grey;
  display: flex;
  flex-wrap: wrap;
  max-width: 250px;
  overflow: hidden;
  width: 100%;
`;

export const ImageBox = styled.figure`
  display: flex;
  margin-bottom: 15px;
  margin-top: 0;
  max-width: 250px;
  width: 100%;
`;

export const Img = styled.img`
  height: 245px;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  column-gap: 10px;
  margin: 0 15px 15px;
`;

export const Label = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const Text = styled.p`
  font-weight: 100;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
