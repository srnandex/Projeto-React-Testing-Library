import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import NotFound from '../components/NotFound';

describe('4. Teste o componente <NotFound.js />', () => {
  beforeEach(() => {
    renderWithRouter(<NotFound />);
  });
  it('Teste se página contém um h2 com o texto Page requested not found 😭', () => {
    const notFound = screen.getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const imgNotFound = screen.getAllByRole('img');
    expect(imgNotFound[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
