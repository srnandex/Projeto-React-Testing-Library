import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import About from '../components/About';

describe('2. Teste o componente <About.js />', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const liHome = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(liHome).toBeInTheDocument();
  });

  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    const informations = screen.getByText('About Pokédex');
    expect(informations).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const p1 = screen.getByText(
      'This application simulates a'
      + ' Pokédex, a digital encyclopedia containing all Pokémons',
    );
    const p2 = screen.getByText(
      'One can filter Pokémons by type, and see more details for each one of them',
    );
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const imgPokedex = screen.getByRole('img');
    expect(imgPokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
