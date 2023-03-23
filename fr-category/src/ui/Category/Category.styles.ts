import styled, { css } from 'styled-components';

export const Box = styled.div`
  align-content: center;
  column-gap: 40px;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1440;
`;

export const Button = styled.button`
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
