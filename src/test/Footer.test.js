import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('renders the footer with the correct copyright text', () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(/© 2023 Meu Portfólio/i); // Substitua pelo texto real
    expect(copyrightElement).toBeInTheDocument();
  });
});