import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import img from './images/bg.jpg';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;

  font-family: 'Gloria Hallelujah', cursive, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
}


`;
