import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('5. Teste o componente <Pokedex.js />', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    const notPokemon = screen.getByText('Encountered pokémons');
    expect(notPokemon).toBeInTheDocument();
  });

  it('Teste se página contém um h2 com o texto Encountered pokémons.', async () => {
    const btnAll = screen.getByRole('button', { name: 'All' });
    expect(btnAll).toBeDefined();

    userEvent.click(btnAll);

    const nameFirstPokemonAll = await screen.getByText('Pikachu');
    expect(nameFirstPokemonAll).toBeInTheDocument();
  });

  it('Teste se página contém um h2 com o texto Encountered pokémons.', async () => {
    const nameFirstPokemon = screen.getByText('Pikachu');
    expect(nameFirstPokemon).toBeInTheDocument();

    const btnNextpokemon = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(btnNextpokemon).toBeDefined();

    userEvent.click(btnNextpokemon);

    const nameSecondPokemon = await screen.getByText('Charmander');
    expect(nameSecondPokemon).toBeInTheDocument();
  });

  it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    const magicNumber = 7;
    const testId = screen.getAllByTestId('pokemon-type-button');
    expect(testId.length).toEqual(magicNumber);

    const typeEletric = screen.getByRole('button', { name: 'Electric' });
    expect(typeEletric).toBeDefined();
  });
});
