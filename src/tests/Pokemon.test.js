import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('6. Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
    renderWithRouter(<App />);
    const namePokemon = screen.getByText('Pikachu');
    expect(namePokemon).toBeInTheDocument();
    const detailsPokemon = screen.getByText('Average weight: 6.0 kg');
    expect(detailsPokemon).toBeInTheDocument();
  });

  it('Teste se página contém um h2 com o texto Encountered pokémons.', () => {
    renderWithRouter(<App />);
    const imgPokemon = screen.getByRole('img');
    expect(imgPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imgPokemon).toHaveAttribute('alt', 'Pikachu sprite');
  });

  it('Teste se tem lin more details e adiciona favorito', async () => {
    const { history } = renderWithRouter(<App />);
    const linkMoreDetails = screen.getAllByRole('link');
    expect(linkMoreDetails[3].innerHTML).toBe('More details');

    userEvent.click(linkMoreDetails[3]);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const favoritePoke = await screen.getByRole('checkbox', { id: 'favorite' });

    userEvent.click(favoritePoke);

    const veriFavorite = await screen.getAllByRole('img');
    expect(veriFavorite[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(veriFavorite[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });

  it('Teste do type do pokemon', () => {
    renderWithRouter(<App />);
    const testId = screen.getByTestId('pokemon-type');
    expect(testId.innerHTML).toEqual('Electric');
  });
});
