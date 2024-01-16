import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  list-style-position: inside;
  width: 600px;
  max-width: 100%;
  /* background: peachpuff; */
  box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.15);
  color: white;
  border-radius: 0.75rem;
`;

export const Item = styled.li`
  padding: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid lightblue;
  }

  &:first-child {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;
