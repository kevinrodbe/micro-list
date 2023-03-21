import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
  margin: auto 15px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 30px;
`;

export const A = styled.a`
  cursor: pointer;
  font-size: 22px;
  ${({ selected }) =>
    selected &&
    css`
      color: orange;
    `}
`;
