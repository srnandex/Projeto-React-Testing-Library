import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('4. Teste o componente <FavoritePokemons.js />', () => {
  beforeEach(() => {
    renderWithRouter(<FavoritePokemons />);
  });
  it('Teste se é exibido na tela a mensagem No favorite pokemon found.', () => {
    const notFound = screen.getByText('No favorite pokemon found');
    expect(notFound).toBeInTheDocument();
  });
});
