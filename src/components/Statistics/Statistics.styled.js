import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.4rem;
  /* background: whitesmoke; */
  /* margin: 0;
	padding: 1rem; */
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const List = styled.ul`
  list-style: none;
  list-style-position: inside;
  width: 600px;
  max-width: 100%;
  background: white;
  box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.15);
  padding: 0;
  margin: 0;
  border-radius: 0.1rem;
`;

export const Item = styled.li`
  padding: 0 0 0 1rem;

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
