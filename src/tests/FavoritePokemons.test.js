import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('3. Teste o componente <FavoritePokemons.js />', () => {
  beforeEach(() => {
    renderWithRouter(<FavoritePokemons />);
  });
  it('Teste se é exibido na tela a mensagem No favorite pokemon found.', () => {
    const notPokemon = screen.getByText('No favorite pokemon found');
    expect(notPokemon).toBeInTheDocument();
  });
});
