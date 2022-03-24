import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('1. Teste o componente <App.js />', () => {
  it('Teste se o topo da aplicação contém um conjunto de links de navegação.', () => {
    renderWithRouter(<App />);
    const liHome = screen.getByRole('link', { name: 'Home' });
    expect(liHome).toBeDefined();
    const liAbout = screen.getByRole('link', { name: 'About' });
    expect(liAbout).toBeDefined();
    const liFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(liFavorite).toBeDefined();
  });
});
